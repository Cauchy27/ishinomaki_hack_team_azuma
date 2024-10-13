"use client";

import * as React from 'react';
import { Typography } from '@mui/material';

interface CuteResultScreenProps {
  player1: string,
  player2: string,
  setP1Words: (words: string[]) => void,
  setP2Words: (words: string[]) => void,
  changePage: (page: string) => void,
  battleId:number
}

const countStart=120; //タイマーの開始時刻

const Battle = (
  {
    player1,
    player2,
    setP1Words,
    setP2Words,
    goResult,
    battleId
  }) => {
  const [selectedLeftCards, setSelectedLeftCards] = React.useState([]);
  const [selectedRightCards, setSelectedRightCards] = React.useState([]);
  const [timer, setTimer] = React.useState(countStart);
  const [timeUp, setTimeUp] = React.useState(false);
  const [showReady, setShowReady] = React.useState(true); // 「よ〜い」表示用
  const [showStart, setShowStart] = React.useState(false); // 「すた〜と！」表示用

  const [leftCards, setLeftCards] = React.useState([
    { id: 1, name: "Left Card 1", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Left Card 2", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Left Card 3", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Left Card 4", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Left Card 5", image: "https://via.placeholder.com/100" },
  ]);

  const [rightCards, setRightCards] = React.useState([
    { id: 1, name: "Right Card 1", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Right Card 2", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Right Card 3", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Right Card 4", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Right Card 5", image: "https://via.placeholder.com/100" },
  ]);

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
              className="border p-2 text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleLeftCardClick(card)}
            >
              <img src={card.image} alt={card.name} className="mx-auto" />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 左側のカード置き場 */}
      <div className="flex flex-col justify-center items-center w-1/6 p-5 relative">
        {selectedLeftCards.length === 0 && (
          <img
            src="https://via.placeholder.com/120"
            alt="Player 1 Card Slot"
            className="absolute"
            style={{ width: '100px', height: '100px' }}
          />
        )}
        <div className="absolute inset-0 flex justify-center items-center">
          {selectedLeftCards.map((card, index) => (
            <div
              key={card.id}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${index * 5}px, ${index * 5}px)`,
                zIndex: index,
                width: '100px',
                height: '100px',
              }}
            >
              <img src={card.image} alt={card.name} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* 中央のプレイヤー画像 */}
      <div className="flex justify-center items-center w-1/3 relative">
        <img src="https://via.placeholder.com/200" alt="Player 1" className="mr-10" />
        <img src="https://via.placeholder.com/200" alt="Player 2" className="ml-10" />
      </div>

      {/* 右側のカード置き場 */}
      <div className="flex flex-col justify-center items-center w-1/6 p-5 relative">
        {selectedRightCards.length === 0 && (
          <img
            src="https://via.placeholder.com/120"
            alt="Player 2 Card Slot"
            className="absolute"
            style={{ width: '100px', height: '100px' }}
          />
        )}
        <div className="absolute inset-0 flex justify-center items-center">
          {selectedRightCards.map((card, index) => (
            <div
              key={card.id}
              className="absolute"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${index * 5}px, ${index * 5}px)`,
                zIndex: index,
                width: '100px',
                height: '100px',
              }}
            >
              <img src={card.image} alt={card.name} className="mx-auto" />
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
              className="border p-2 text-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleRightCardClick(card)}
            >
              <img src={card.image} alt={card.name} className="mx-auto" />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Battle;