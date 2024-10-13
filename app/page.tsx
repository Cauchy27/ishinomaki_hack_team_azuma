"use client"

import Tittle from "./_screen/title";
import Select from "./_screen/select";
import Confirm from "./_screen/confirm";
import Battle from "./_screen/battle";
import Result from "./_screen/result";

import { Button } from "@mui/material";

import { useState, useEffect } from "react";

const pageTargetList = ["title", "select", "confirm", "battle", "result"];

const testPlayersData = ["イノウエ","ミコト"]

const Home = () => {

  const [resultIs, setResultIs] = useState<boolean>(false);
  const [pageTarget, setPageTarget] = useState<string>("title");
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");
  const [selectedKawaiiP1, setSelectedKawaiiP1] = useState<string>("")
  const [selectedKawaiiP2, setSelectedKawaiiP2] = useState<string>("")
  const [kawaiiWordP1, setKawaiiWordP1] = useState<string[]>([])
  const [kawaiiWordP2, setKawaiiWordP2] = useState<string[]>([])

  const goResult = () => {
    setResultIs(true);
    setPageTarget("");
  }

  const goTitle = () => {
    setResultIs(false);
    setPageTarget("title");
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

  return (
    <div className="">
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
          name1={player1}
          name2={player2}
          message="そんなあなたが、イチバンかわいい❤️"
          goTitle={goTitle}
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
        />
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
