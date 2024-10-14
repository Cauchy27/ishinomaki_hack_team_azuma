import React from 'react';

const TitleScreen = ({changePage, insertBattleData}) => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/img/S__6176777_0.png')",
        /* 代替方法: */
        /* background: "url('/img/S__6176777_1.png') no-repeat center center fixed",
        backgroundSize: "cover" */
      }}
    >
      {/* Optional overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="text-center p-8 bg-white bg-opacity-80 rounded-3xl shadow-lg z-10">
        <h1 className="text-6xl font-bold mb-6">
          <label className="text-pink-400" style={{ fontFamily: 'marshmallowpopheart' }}>
            ぱふぇぱはれ
          </label>
        </h1>

        {/* PLAY button */}
        <button
          className="w-32 h-32 relative focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75 transform hover:scale-105 transition-all duration-300"
          onClick={() => {changePage("select"); insertBattleData();}}
        >
          <label className="text-4xl text-pink-400" style={{ fontFamily: 'marshmallowpopheart' }}>
            PLAY
          </label>
        </button>
      </div>
      <div className="absolute bottom-3 text-center p-8 bg-white bg-opacity-80 rounded-3xl shadow-lg z-10">
        <label className="text-2xl text-pink-500 " style={{ fontFamily: 'marshmallowpopheart' }}>
          かわいいでたたかえ！<br/>
          くばられたてふだで「かわいい」をせつめいしよう！<br/>
          いちばん「きゅん」をあつめたひとがかち<br/><br/>
          しんさいんさんは、QRこーどをよみこんでね♪
        </label>
      </div>
    </div>
  );
};

export default TitleScreen;