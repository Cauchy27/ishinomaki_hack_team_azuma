"use client"

import Battle from "./_screen/battle";
import Result from "./_screen/result";
import Select from "./_screen/select";
import Tittle from "./_screen/title";

import { Button } from "@mui/material";

import { useState, useEffect } from "react";

const Home = () => {

  const [resultIs, setResultIs] = useState<boolean>(false);

  const goResult = () => {
    setResultIs(true);
  }
  const goTitle = () => {
    setResultIs(false);
  }

  return (
    <div className="">
      <Button
        onClick={()=>{goResult()}}
      >
        テスト用：リザルト画面を出す
      </Button>
      {/* <Battle/> */}

      {
        resultIs &&
        <Result
          score={70}
          totalQuestions={10}
          message="あなたの勝利です！！かわいい❤️"
          goTitle={goTitle}
        />
      }
      {/* <Select/> */}
      {/* <Tittle/> */}
    </div>
  );
}

export default Home;
