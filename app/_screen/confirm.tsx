"use client"

import * as React from 'react';
import { useState } from 'react';

const wordList :string []= [
  "ちいさい",
  "まるい",
  "おさない",
  "やわらかい",
  "ふわふわ",
  "げんき",
  "そぼく",
  "もくもく",
  "したしみやすい",
  "ゆるい",
];

interface CuteResultScreenProps {
  player1: string,
  player2: string,
  setP1Words: (words: string[]) => void,
  setP2Words: (words: string[]) => void,
  changePage: (page: string) => void,
}

const Confirm: React.FC<CuteResultScreenProps> = (
  {
    player1,
    player2,
    setP1Words,
    setP2Words,
    changePage
  }) => {
  const [myWords, setWords] = useState<string[]>([""]);
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [infoMessage, setinfoMessage] = useState<string>("");
  const [isWait, setIsWait] = useState<boolean>(false);

  function getRandomElements<T>(arr: T[], count: number): T[] {
    // 配列をシャッフルする
    const shuffled = arr.slice(); // 元の配列をコピー
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // 要素を入れ替える
    }
  
    // 指定された数の要素を取り出す
    return shuffled.slice(0, count);
  }
  
  function initCard() {
    let randWords:string[] = getRandomElements(wordList, 4);
    randWords.push("　");
    setWords(randWords);
  }
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  const handleAddWord = () => {
    setErrorMessage("");

    if (inputValue.trim() == "") {
      // 未入力
      setErrorMessage("なにか　にゅうりょくしてね");
    } else {
      const isConfirmed = window.confirm(`てふだに「 ${inputValue}」をついかするよ？`);
      if(isConfirmed) {
        myWords[myWords.length - 1] = inputValue;
        setinfoMessage("準備完了！");
        setInputValue("");
        setIsWait(true);

        // ボタンを再度活性にする処理を追加
        setTimeout(() => {
          setErrorMessage("");
          setinfoMessage("");
          setIsWait(false);
          // 画面遷移
          if ( player2 === "" ) {
            setP1Words(myWords);
            changePage("select");
          } else {
            setP2Words(myWords);
            changePage("battle");
          }
        }, 5000);

        console.log(myWords);
      }
    } 
  };
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (myWords.length === 0) return;

    if (event.key === "ArrowUp") {
    } else if (event.key === "ArrowDown") {
    }
  };

  React.useEffect(() => {
    initCard();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-300">
      <main className="flex flex-col items-center">
        {(player2 === "")
          ? 
            <h1>プレイヤー1：{player1}</h1>
          : 
            <h1>プレイヤー2：{player2}</h1>
        }
        <h1 className="text-4xl font-bold mb-8">かわいい　ようそ</h1>

        <div className="flex space-x-4 mb-8">
          {myWords.map((word, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center w-36"
            >
              <span className="text-xl font-semibold text-gray-800">{word}</span>
            </div>
          ))}
        </div>

        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="p-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isWait}
            placeholder="ついかのようそ"
          />
          <button
            onClick={handleAddWord}
            className={`p-2 rounded-lg ${isWait ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
            disabled={isWait}
          >
            けってい
          </button>
        </div>
        {errorMessage && (
            <div className="text-red-500 mt-4">
              {errorMessage}
            </div>
        )}
        {infoMessage && (
            <div className="mt-4">
              {infoMessage}
            </div>
        )}
      </main>
    </div>

  )
}

export default Confirm;