"use client"

import * as React from 'react';
import { useState } from 'react';

const Confirm = () => {
  const [words, setWords] = useState<string[]>(["ふわふわ", "まるい", "ちいさい", "しろい", "　"]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddWord = () => {
    if (inputValue.trim() !== "") {
      setWords([...words, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-300">
      <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">かわいい　ようそ</h1>

      <div className="flex space-x-4 mb-8">
        {words.map((word, index) => (
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
          Add
        </button>
      </div>
      </main>
    </div>

  )
}

export default Confirm;