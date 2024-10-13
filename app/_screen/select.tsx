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
    <div className="container mx-auto text-center bg-pink-50 p-6">
      <h1 className="text-6xl text-pink-400" style={{ fontFamily: 'marshmallowpopheart' }}>
        好きな【かわいい】を選ぼう！
      </h1>
      <div className="flex justify-around mt-8">
        {selectedImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`かわいい${index + 1}`}
            className={`w-36 h-36 cursor-pointer transition-transform ${
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