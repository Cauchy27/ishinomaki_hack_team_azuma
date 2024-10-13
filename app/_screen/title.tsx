"use client"; // これを一番上に置く

import React from 'react';
// import './app.css'; // 必要なスタイルをインポート

interface CuteResultScreenProps {
  changePage:()=> void,
}

const TitleScreen = ({changePage}) => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-purple-300 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-bold mb-6 text-pink-600 animate-bounce">
          きゅんぺちゃりぶれ
        </h1>
        <button
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
          onClick={() => changePage("select")}
        >
          <Heart className="mr-2" size={20} />
          PLAY
        </button>
      </div>
    </div>
  );
}
};

export default TitleScreen;
