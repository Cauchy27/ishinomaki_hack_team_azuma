"use client"

import React, { useState, useEffect } from 'react';

const Select = () => {

  const [imageUrls] = useState([
    "/img/cuteimg1.png",
    "/img/cuteimg2.png",
    "/img/cuteimg3.png",
    "/img/cuteimg4.png",
  ]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const [playerName, setPlayerName] = useState(""); // プレイヤー名の状態を管理

  useEffect(() => {
    // ランダムに3つの画像を選択
    const randomImages: string[] = [];
    while (randomImages.length < 3) {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      if (!randomImages.includes(imageUrls[randomIndex])) {
        randomImages.push(imageUrls[randomIndex]);
      }
    }
    setSelectedImages(randomImages);
  }, [imageUrls]);

  const selectImage = (index: number) => {
    setSelectedIndex(index);
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
        {selectedImages.map((img, index) => (
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
    </div>
  );
}

export default Select;