"use client"

import Battle from "./_screen/battle";
import Result from "./_screen/result";
import Select from "./_screen/select";
import Tittle from "./_screen/title";

import { Button } from "@mui/material";

import { useState, useEffect } from "react";

const pageTargetList = ["title", "select", "battle"];

const Home = () => {

  const [resultIs, setResultIs] = useState<boolean>(false);
  const [pageTarget, setPageTarget] = useState<string>("title");

  const goResult = () => {
    setResultIs(true);
  }
  const goTitle = () => {
    setResultIs(false);
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
          score={70}
          totalQuestions={10}
          message="あなたの勝利です！！かわいい❤️"
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
          changePage={setPageTarget}
        />
      }
    </div>
  );
}

export default Home;
