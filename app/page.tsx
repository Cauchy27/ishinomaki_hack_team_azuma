"use client"

import Tittle from "./_screen/title";
import Select from "./_screen/select";
import Confirm from "./_screen/confirm";
import Battle from "./_screen/battle";
import Result from "./_screen/result";

import { Button } from "@mui/material";

import { useState, useEffect } from "react";

const pageTargetList = ["title", "select", "confirm", "battle"];

const testPlayersData = ["イノウエ","ミコト"]

const Home = () => {

  const [resultIs, setResultIs] = useState<boolean>(false);
  const [pageTarget, setPageTarget] = useState<string>("title");
  const [players, setPlayers] = useState<string[]>(["",""])

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
  const goConfirm = () => {
    setResultIs(false);
    setPageTarget("confirm");
  }

  const changePage = (target:string) => {
    pageTargetList.map((page:string)=>{
      if(target==page){
        setPageTarget(page);
      }
    });
  }

  return (
    <div className="">
      <Button
        onClick={()=>{goConfirm()}}
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
        <Confirm/>
      }
    </div>
  );
}

export default Home;
