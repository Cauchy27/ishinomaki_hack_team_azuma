"use client";

// import { cardActionAreaClasses } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
// import { Typography } from '@mui/material';

interface CuteResultScreenProps {
  player1: string;
  player2: string;
  selectedKawaiiP1: string;
  selectedKawaiiP2: string;
  kawaiiWordP1: string[];
  kawaiiWordP2: string[];
  goResult: () => void;
  battleId:number
}

const countStart=5; //タイマーの開始時刻

const Battle = ({
  player1,
  player2,
  selectedKawaiiP1,
  selectedKawaiiP2,
  kawaiiWordP1,
  kawaiiWordP2,
  goResult,
  battleId
}: CuteResultScreenProps) => {
  const [selectedLeftCards, setSelectedLeftCards] = React.useState([]);
  const [selectedRightCards, setSelectedRightCards] = React.useState([]);
  const [timer, setTimer] = React.useState(countStart);
  const [timeUp, setTimeUp] = React.useState(false);
  const [showReady, setShowReady] = React.useState(true); // 「よ〜い」表示用
  const [showStart, setShowStart] = React.useState(false); // 「すた〜と！」表示用

  const [leftCards, setLeftCards] = React.useState([
    { id: 1, name: kawaiiWordP1[0] },
    { id: 2, name: kawaiiWordP1[1] },
    { id: 3, name: kawaiiWordP1[2] },
    { id: 4, name: kawaiiWordP1[3] },
    { id: 5, name: kawaiiWordP1[4] },
  ]);

  const [rightCards, setRightCards] = React.useState([
    { id: 1, name: kawaiiWordP2[0] },
    { id: 2, name: kawaiiWordP2[1] },
    { id: 3, name: kawaiiWordP2[2] },
    { id: 4, name: kawaiiWordP2[3] },
    { id: 5, name: kawaiiWordP2[4] },
  ]);

  useEffect(() => {
    // クライアントサイドでのみ音声を再生
    if (typeof window !== 'undefined') {
      const audio = new Audio('/sound/start1.mp3');
      audio.play().catch(error => console.error('Audio playback failed', error));
    }
  }, []);

  const handleLeftCardClick = (card) => {
    setSelectedLeftCards((prev) => [...prev, card]);
    setLeftCards((prev) => prev.filter((c) => c.id !== card.id));
  };

  const handleRightCardClick = (card) => {
    setSelectedRightCards((prev) => [...prev, card]);
    setRightCards((prev) => prev.filter((c) => c.id !== card.id));
  };

  // 「よ〜い」と「すた〜と！」の表示制御
  React.useEffect(() => {
    const readyTimeout = setTimeout(() => {
      setShowReady(false);
      setShowStart(true);
    }, 2000); // 2秒後に「よ〜い」を消す

    const startTimeout = setTimeout(() => {
      setShowStart(false);
      setTimer(countStart); // タイマーをcountStartからスタート
    }, 4000); // さらに2秒後に「すた〜と！」を消す

    return () => {
      clearTimeout(readyTimeout);
      clearTimeout(startTimeout);
    };
  }, []);

  // タイマーのカウントダウン処理
  React.useEffect(() => {
    if (timer > 0 && !showReady && !showStart) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      setTimeUp(true); // タイマーが0になったらたいむあっぷ表示

      setTimeout(() => {
        goResult();
      }, 4000);
    }
  }, [timer, showReady, showStart]);

  return (
    <div className="flex h-screen bg-pink-300 relative">
      {/* タイマー */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold text-pink-500 shadow-lg">
          {timer}
        </div>
      </div>
      {
        battleId > 0 &&
        <div className='absolute top-20 mt-20 left-1/2 text-blue-500 font-bold items-center justify-center text-3xl transform -translate-x-1/2 text-center'>
          <h1 className="text-white text-3xl ">るーむ：{battleId}</h1>
        </div>
      }

      {/* グレーアウトオーバーレイ */}
      {timeUp && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 z-10">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-white text-6xl font-bold">たいむあっぷ</h1>
          </div>
        </div>
      )}

      {/* 「よ〜い」表示 */}
      {showReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <h1 className="text-white text-6xl font-bold">よ〜い</h1>
        </div>
      )}

      {/* 「すた〜と！」表示 */}
      {showStart && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <h1 className="text-white text-6xl font-bold">すた〜と！</h1>
        </div>
      )}

      {/* 左側の未使用カードを表示 */}
      <div className="flex flex-col justify-center items-end w-1/6 p-5">
        <div className="flex flex-col space-y-2">
          {leftCards.map((card) => (
            <div
              key={card.id}
              className="bg-white text-black p-4 text-center cursor-pointer hover:scale-105 transition-transform border border-gray-400"
              onClick={() => handleLeftCardClick(card)}
            >
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 左側のカード置き場 */}
      <div className="flex flex-col justify-center items-center w-1/6 p-5 relative">
        <div className="bg-gray-200 w-44 h-32 text-center flex items-center justify-center" />
        <div className="absolute inset-0 flex justify-center items-center">
          {selectedLeftCards.map((card, index) => (
            <div
              key={card.id}
              className="absolute bg-white text-black p-4 border border-gray-400"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${index * 5}px, ${index * 5}px)`,
                zIndex: index,
              }}
            >
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* プレイヤー1とプレイヤー2の名前 */}
      <div className="flex justify-center items-center w-1/3 relative">
        <div className="absolute left-1/4 text-center" style={{top: "200px", left: "-10px"}}>
          <h2 className="text-pink-500 text-3xl font-bold bg-white rounded-full px-4 py-2 shadow-lg">
            {player1}
          </h2>
        </div>
        <img src={selectedKawaiiP1} alt="Player 1" className="mr-10" style={{ width: '200px', height: '200px' }} />
        <div className="absolute right-1/4 text-center" style={{top: "200px", right: "-10px"}}>
          <h2 className="text-blue-500 text-3xl font-bold bg-white rounded-full px-4 py-2 shadow-lg">
            {player2}
          </h2>
        </div>
        <img src={selectedKawaiiP2} alt="Player 2" className="ml-10" style={{ width: '200px', height: '200px' }} />
      </div>

      {/* 右側のカード置き場 */}
      <div className="flex flex-col justify-center items-center w-1/6 p-5 relative">
        <div className="bg-gray-200 w-44 h-32 text-center flex items-center justify-center" />
        <div className="absolute inset-0 flex justify-center items-center">
          {selectedRightCards.map((card, index) => (
            <div
              key={card.id}
              className="absolute bg-white text-black p-4 border border-gray-400"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${index * 5}px, ${index * 5}px)`,
                zIndex: index,
              }}
            >
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 右側の未使用カードを表示 */}
      <div className="flex flex-col justify-center items-start w-1/6 p-5">
        <div className="flex flex-col space-y-2">
          {rightCards.map((card) => (
            <div
              key={card.id}
              className="bg-white text-black p-4 text-center cursor-pointer hover:scale-105 transition-transform border border-gray-400"
              onClick={() => handleRightCardClick(card)}
            >
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Battle;