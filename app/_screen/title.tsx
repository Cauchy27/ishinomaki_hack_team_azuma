"use client"; // これを一番上に置く

import React from 'react';
import { useRouter } from 'next/router'; // Next.jsのルーティングを使用
import './app.css'; // 必要なスタイルをインポート

const TitleScreen = () => {
  const router = useRouter(); // useRouterでNext.jsのルーティングを使用

  const goToNextPage = () => {
    router.push('/next'); // "/next"ページへ遷移
  };

  return (
    <div className="container">
      <h1 className="title">きゅんぺちゃりぶれ</h1>
      <button className="play-button" onClick={goToNextPage}>PLAY</button>
    </div>
  );
};

export default TitleScreen;
