"use client"; // これを一番上に置く

import React from 'react';
// import './app.css'; // 必要なスタイルをインポート

interface CuteResultScreenProps {
  changePage:()=> void,
  insertBattleData:() => void
}

const TitleScreen = ({changePage,insertBattleData}) => {

  return (
    <div className="container">
      <h1 className="title">きゅんぺちゃりぶれ</h1>
      <button className="play-button" onClick={()=>{changePage("select");insertBattleData();}}>PLAY</button>
    </div>
  );
};

export default TitleScreen;
