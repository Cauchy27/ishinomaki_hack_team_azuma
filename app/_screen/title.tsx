"use client"; // これを一番上に置く

import React from 'react';

// interface CuteResultScreenProps {
//   changePage:()=> void,
// }

const TitleScreen = ({changePage, insertBattleData}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7cecff] to-[#ffccf2] flex items-center justify-center relative overflow-hidden">
      {/* Cute character background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 z-0">
        <svg width="400" height="400" viewBox="0 0 100 100">
          {/* Cute character: Bunny */}
          <circle cx="50" cy="50" r="30" fill="#FFA7D1" />
          <circle cx="40" cy="40" r="5" fill="#FFFFFF" />
          <circle cx="60" cy="40" r="5" fill="#FFFFFF" />
          <path d="M45,60 Q50,65 55,60" stroke="#FF69B4" strokeWidth="2" fill="none" />
          {/* Bunny ears */}
          <ellipse cx="35" cy="25" rx="5" ry="10" fill="#FFA7D1" />
          <ellipse cx="65" cy="25" rx="5" ry="10" fill="#FFA7D1" />
        </svg>
      </div>
  
      <div className="text-center p-8 bg-white bg-opacity-80 rounded-3xl shadow-lg z-10">
        <h1 className="text-4xl font-bold mb-6 text-pink-600 animate-bounce">
          ぱふぇぱはれ
        </h1>
  
        {/* Heart-shaped button */}
        <button
          className="w-32 h-32 relative focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75 transform hover:scale-105 transition-all duration-300"
          onClick={() => {changePage("select");insertBattleData();}}
        >
          
            <text
              x="50"
              y="55"
              fontSize="16"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              PLAY
            </text>
            <svg>
          </svg>
        </button>
      </div>
      </div>
  );
};

export default TitleScreen;