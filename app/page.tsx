"use client"

import Tittle from "./_screen/title";
import Select from "./_screen/select";
import Confirm from "./_screen/confirm";
import Battle from "./_screen/battle";
import Result from "./_screen/result";

import { Button } from "@mui/material";

import { useState, useEffect } from "react";

import { Supabase } from "./_component/supabase";

const pageTargetList = ["title", "select", "confirm", "battle", "result"];

const testPlayersData = ["イノウエ","ミコト"]

const Home = () => {

  const [resultIs, setResultIs] = useState<boolean>(false);
  const [pageTarget, setPageTarget] = useState<string>("title");
  const [players, setPlayers] = useState<string[]>(["",""]);

  // テスト用カウント
  const [count, setCount] = useState<number>(0);


  const goResult = () => {
    if(players[0] == players[1] && players[0] == ""){
      setPlayers(testPlayersData);
    }
    setResultIs(true);
    setPageTarget("");
  }
  const goTitle = () => {
    setResultIs(false);
    setPageTarget("title");
  }

  const changePage = (target:string) => {
    pageTargetList.map((page:string)=>{
      if(target==page){
        setPageTarget(page);
      }
    });
  }

  const getBattleList = async() => {
    const storage = Supabase.from("Battle");
    let { data, error } = await storage.select("player1Count");
    console.log(data[0].player1Count);
  }
  const updateBattleData = async() => {
    const storage = Supabase.from("Battle");
    let { data, error } = await storage.select("id, player1Count, player2Count");

    await storage.update({player1Count:data[0].player1Count+count}).eq('id',data[0].id).select()
  }

  useEffect(()=>{
    getBattleList();
  },[])

  return (
    <div className="">
      <Button
        onClick={()=>{setCount((prev)=> prev+1)}}
      >
        カウント：{count}
      </Button>
      <Button
        onClick={()=>{updateBattleData()}}
      >
        送信
      </Button>
      <Button
        onClick={()=>{changePage("confirm")}}
      >
        テスト用：要素確認画面を出す
      </Button>
      <Button
        onClick={()=>{goResult()}}
      >
        テスト用：リザルト画面を出す
      </Button>
      {
        pageTarget=="battle"&&
        <Battle/>
      }
      {
        resultIs &&
        <Result
          score1={30}
          score2={32}
          name1={players[0]}
          name2={players[1]}
          message="そんなあなたが、イチバンかわいい❤️"
          goTitle={goTitle}
        />
      }
      {
        pageTarget=="select"&&
        <Select/>
      }
      {
        pageTarget=="title"&&
        <Tittle
          changePage={changePage}
        />
      }
      {
        pageTarget=="confirm"&&
        <Confirm
          changePage={changePage}
        />
      }
    </div>
  );
}

export default Home;
