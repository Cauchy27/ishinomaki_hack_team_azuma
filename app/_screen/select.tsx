"use client"

import React, { useState, useEffect } from 'react';

interface SelectScreenProps {
  player1: string,
  setPlayer1: (name: string) => void,
  setPlayer2: (name: string) => void,
  setSelectedKawaiiP1: (path: string) => void,
  setSelectedKawaiiP2: (path: string) => void,
  goConfirm:() => void,
}

const Select: React.FC<SelectScreenProps> = (
  {
    player1,
    setPlayer1,
    setPlayer2,
    setSelectedKawaiiP1,
    setSelectedKawaiiP2,
    goConfirm,
  }) => {
  const [imageUrls] = useState([
    "/img/cuteimg1.png",
    "/img/cuteimg2.png",
    "/img/cuteimg3.png",
    "/img/cuteimg4.png",
    "/img/cuteimg5.png",
    "/img/cuteimg6.png",
    "/img/cuteimg7.png",
    "/img/cuteimg8.png",
  ]);

  const [optionImages, setOptionImages] = useState<string[]>([]); // 3つの選択肢の画像を管理
  const [selectedIndex, setSelectedIndex] = useState<number>(null); // 選択された画像のインデックスを管理
  const [playerName, setPlayerName] = useState(""); // プレイヤー名の状態を管理
  const [errorMessage, setErrorMessage] = useState(""); // エラーメッセージ
  const [successMessage, setSuccessMessage] = useState(""); // 成功メッセージ
  const [hasDisplayedMessage, setHasDisplayedMessage] = useState(false); // メッセージ表示を一度だけにするための状態

  useEffect(() => {
    // ランダムに3つの画像を選択
    const randomImages: string[] = [];
    while (randomImages.length < 3) {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      if (!randomImages.includes(imageUrls[randomIndex])) {
        randomImages.push(imageUrls[randomIndex]);
      }
    }
    setOptionImages(randomImages);
  }, [imageUrls]);

  const selectImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handleDecision = () => {
    setErrorMessage(""); // エラーメッセージのリセット
    setSuccessMessage(""); // 成功メッセージのリセット

    if (!playerName) {
      setErrorMessage("プレイヤー名を入力してね");
      return;
    }

    if (selectedIndex === null) {
      setErrorMessage("【好きな可愛い画像を選んでね");
      return;
    }

    // 初回は成功メッセージを表示し、再度ボタンが押されたときにページ遷移
    if (!hasDisplayedMessage) {
      setSuccessMessage("プレイヤー名をもっと可愛くしなきゃ！");
      setHasDisplayedMessage(true);
    } else {
      // 2回目以降のボタンクリックでページ遷移
      if (player1 === "") {
        console.log(playerName)
        setPlayer1(playerName);
        setSelectedKawaiiP1(optionImages[selectedIndex])
      } else {
        setPlayer2(playerName);
        setSelectedKawaiiP2(optionImages[selectedIndex])
      }
      goConfirm();
    }
  };

  return (
    <div className="mx-auto text-center bg-pink-50 p-6 h-screen">
      {/* プレイヤー名の入力欄 */}
      <div className="mb-4">
        <label className="text-4xl text-pink-400" style={{ fontFamily: 'marshmallowpopheart' }}>
          プレイヤー名:　
        </label>
        <input
          type="text"
          id="playerName"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="border border-pink-500 rounded px-4 py-2 mt-2 text-center"
          placeholder="プレイヤー名"
        />
      </div>
      <h1 className="text-6xl text-pink-400" style={{ fontFamily: 'marshmallowpopheart' }}>
        好きな【かわいい】を選ぼう！
      </h1>
      <div className="flex justify-around mt-8">
        {optionImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`かわいい${index + 1}`}
            className={`w-64 h-64 cursor-pointer transition-transform ${
              selectedIndex === index
                ? "border-4 border-pink-500 scale-110"
                : "opacity-50"
            }`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
      
      {/* 決定ボタン */}
      <button
        onClick={handleDecision}
        className="mt-8 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
      >
        決定
      </button>

      {/* エラーメッセージ */}
      {errorMessage && (
        <p className="text-red-500 bg-red-100 p-3 rounded-lg font-semibold mt-4 animate-pulse shadow-lg border-2 border-red-300">
          {errorMessage}
        </p>
      )}

      {/* 成功メッセージ */}
      {successMessage && (
        <p className="text-pink-500 bg-pink-100 p-4 rounded-lg font-bold mt-4 animate-bounce shadow-lg border-2 border-pink-300">
          {successMessage}
        </p>
      )}
    </div>
  );
}

export default Select;