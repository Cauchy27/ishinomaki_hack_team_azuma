"use client"

import Confirm from "./_screen/confirm";
import Battle from "./_screen/battle";
import Result from "./_screen/result";
import Tittle from "./_screen/title";
import Select from "./_screen/select";
import "./_styles/common.css";

// import { Button } from "@mui/material";

import { useState, useEffect } from "react";

import { Supabase } from "./_component/supabase";

const pageTargetList = ["title", "select", "confirm", "battle", "result"];

// const testPlayersData = ["イノウエ","ミコト"]

const Home = () => {

  const [resultIs, setResultIs] = useState<boolean>(false);
  const [pageTarget, setPageTarget] = useState<string>("title");
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [selectedKawaiiP1, setSelectedKawaiiP1] = useState<string>("")
  const [selectedKawaiiP2, setSelectedKawaiiP2] = useState<string>("")
  const [kawaiiWordP1, setKawaiiWordP1] = useState<string[]>([])
  const [kawaiiWordP2, setKawaiiWordP2] = useState<string[]>([])

  const [battleId, setBattleId] = useState<number>(0);
  const [point, setPoint] = useState<number[]>([-1,-1]);
  
  const goResult = () => {
    // 結果取得
    getBattleData();

    // 画面切り替え
    setResultIs(true);
    setPageTarget("");
  }

  const goTitle = () => {
    setResultIs(false);
    setPageTarget("title");
    setPlayer1("");
    setPlayer2("");
  }

  const goConfirm = () => {
    setResultIs(false);
    setPageTarget("confirm")
  }

  const changePage = (target: string) => {
    pageTargetList.map((page: string)=>{
      if(target==page){
        setPageTarget(page);
      }
    });
  }

  const insertBattleData = async() => {
    const storage = Supabase.from("Battle");
    const { data, error } = await storage.select("id").order("id",{ascending:false});
    await storage.insert([ { 
      id:data[0].id+1,
      player1Name: 'player1', 
      player2Name: 'player2' ,
    }]).select();
    setBattleId(data[0].id+1)
    if(error){
      console.log(error)
    }
  }


  const getBattleData = async() => {
    const storage = Supabase.from("Battle");
    const { data, error } = await storage.select("player1Count, player2Count").eq("id",battleId);
    if(data[0]?.player1Count >= 0 && data[0]?.player2Count >= 0){
      setPoint([data[0].player1Count, data[0].player2Count]);
    }
    if(error){
      console.log("error",error)
    }
  }

  const updateBattleData = async() => {
    const storage = Supabase.from("Battle");
    console.log("update")
    await storage.update({player1Name:player1, player2Name:player2}).eq('id',battleId).select()
  }

  useEffect(()=>{
    getBattleData();
    if(battleId>0){
      updateBattleData();
    }
  },[player1,player2]);

  return (
    <div className="">
      <div className="absolute top-30 left-30 w-150 h-150 z-50 pointer-events-none">
        <img
          src="/img/QR_code2.png"
          alt="Overlay Image"
          className="object-cover w-150 h-150 fixed"
          style={{width: "200px", top: "30px", left: "30px"}}
        />
      </div>

      {/* <Button
        onClick={()=>{insertBattleData()}}
      >
        レコードインサート{battleId}
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
      </Button> */}
      {
        pageTarget=="battle"&&
        <Battle
          player1={player1}
          player2={player2}
          selectedKawaiiP1={selectedKawaiiP1}
          selectedKawaiiP2={selectedKawaiiP2}
          kawaiiWordP1={kawaiiWordP1}
          kawaiiWordP2={kawaiiWordP2}
          goResult={goResult}
          battleId={battleId}
        />
      }
      {/* <Battle
          player1={player1}
          player2={player2}
          selectedKawaiiP1={selectedKawaiiP1}
          selectedKawaiiP2={selectedKawaiiP2}
          kawaiiWordP1={kawaiiWordP1}
          kawaiiWordP2={kawaiiWordP2}
          goResult={goResult}
        />
      }
      {/* <Battle
          player1={player1}
          player2={player2}
          setP1Words={setKawaiiWordP1}
          setP2Words={setKawaiiWordP2}
          goResult={goResult}
          battleId={200}
        /> */}
      {
        resultIs && point[0] !=-1 && point[1] != -1 &&
        <Result
          score1={point[0]}
          score2={point[1]}
          name1={player1}
          name2={player2}
          message="そんなあなたが、イチバンかわいい❤️" //メッセージもランダムでも
          goTitle={goTitle}
          // battleId={battleId}
        />
      }
      {
        pageTarget=="select"&&
        <Select
          player1={player1}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setSelectedKawaiiP1={setSelectedKawaiiP1}
          setSelectedKawaiiP2={setSelectedKawaiiP2}
          goConfirm={goConfirm}
          battleId={battleId}
        />
      }
      {
        pageTarget=="title"&&
        <Tittle
          changePage={changePage}
          insertBattleData={insertBattleData}
        />
      }
      {
        pageTarget=="confirm"&&
        <Confirm
          player1={player1}
          player2={player2}
          setP1Words={setKawaiiWordP1}
          setP2Words={setKawaiiWordP2}
          changePage={changePage}
        />
      }
    </div>
  );
}

export default Home;
