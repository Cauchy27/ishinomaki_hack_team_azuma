"use client"

import Tittle from "./_screen/title";
import Select from "./_screen/select";
import Confirm from "./_screen/confirm";
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
          changePage={changePage}
        />
      }
    </div>
  );
}

export default Home;
