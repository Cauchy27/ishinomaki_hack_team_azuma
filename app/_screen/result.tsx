import React, { useEffect } from 'react';
import { Heart, Award, Star, Sparkles } from 'lucide-react';

interface CuteResultScreenProps {
  score1: number;
  score2: number;
  name1: string;
  name2: string;
  message: string;
  goTitle: () => void;
}

const Result: React.FC<CuteResultScreenProps> = ({ 
  score1, 
  score2, 
  name1, 
  name2, 
  message, 
  goTitle 
}) => {
  const winner = score1 > score2 ? name1 : score2 > score1 ? name2 : "引き分け";

  useEffect(() => {
    // クライアントサイドでのみ音声を再生
    if (typeof window !== 'undefined') {
      const audio = new Audio('/sound/result1.mp3');
      audio.play().catch(error => console.error('Audio playback failed', error));
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-rose-100 via-pink-100 to-sky-100 p-4 animate-gradient-x">
      <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 opacity-50 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-rose-400 animate-bounce">
            対戦結果！
            <Sparkles className="inline-block ml-2 text-amber-300" />
          </h1>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <PlayerResult name={name1} score={score1} />
            <PlayerResult name={name2} score={score2} />
          </div>

          <p className="text-2xl mb-6 text-pink-400 font-bold">
            {winner === "引き分け" ? "引き分け！" : `${winner}の勝ち`}
            <Heart className="inline-block ml-2 text-rose-400 animate-pulse" />
          </p>

          <div className="mb-6 relative">
            <Award className="mx-auto text-amber-300 w-20 h-20 animate-spin-slow" />
            <Star className="absolute top-0 left-1/4 text-sky-300 w-6 h-6 animate-ping" />
            <Star className="absolute bottom-0 right-1/4 text-pink-300 w-6 h-6 animate-ping" />
          </div>

          <p className="text-xl text-purple-400 mb-6 font-bold italic">
            {message}
          </p>

          <button 
            onClick={goTitle}
            className="bg-gradient-to-r from-rose-300 to-sky-300 hover:from-rose-400 hover:to-sky-400 text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-110 active:scale-95 shadow-lg"
          >
            タイトルへ！
          </button>
        </div>
      </div>
    </div>
  );
};

const PlayerResult: React.FC<{ name: string; score: number }> = ({ name, score }) => (
  <div className="bg-gradient-to-br from-rose-200 to-sky-200 rounded-lg p-4 shadow-md transform hover:scale-105 transition duration-300">
    <h2 className="text-lg font-bold text-purple-400 mb-2">{name}</h2>
    <p className="text-2xl font-bold text-rose-400">
      {score} <span className="text-base">きゅん</span>
    </p>
  </div>
);

export default Result;