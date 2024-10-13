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

const Confirm = () => {
  const [myWords, setWords] = useState<string[]>([""]);
  const [inputValue, setInputValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    if (inputValue.trim() == "") {
      // 未入力
      setErrorMessage("入力が必要です。");
    } else {
      myWords[myWords.length - 1] = inputValue;
      setInputValue("");
      setErrorMessage("")
      console.log(myWords);
    } 
  };
  
  React.useEffect(() => {
    initCard();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-300">
      <main className="flex flex-col items-center">
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
          placeholder="ついかのようそ"
        />
        <button
          onClick={handleAddWord}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          けってい
        </button>
      </div>
      {errorMessage && (
          <div className="text-red-500 mt-4">
            {errorMessage}
          </div>
      )}
      </main>
    </div>

  )
}

export default Confirm;