"use client"

import * as React from 'react';

const Tittle = () => {
  import React from 'react';
  import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
  import './App.css';
  
  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/next" element={<NextScreen />} />
        </Routes>
      </Router>
    );
  }
  
  function TitleScreen() {
    const navigate = useNavigate();
  
    const goToNextPage = () => {
      navigate('/next');
    };
  
    return (
      <div className="container">
        <h1 className="title">きゅんぺちゃりぶれ</h1>
        <button className="play-button" onClick={goToNextPage}>PLAY</button>
      </div>
    );
  }
  
  function NextScreen() {
    return (
      <div className="container">
        <h1 className="title">次の画面に来ました！</h1>
        <Link to="/" className="play-button">戻る</Link>
      </div>
    );
  }
  
  export default App;
  
  return(import React from 'react';
import './App.css';

function App() {
  const goToNextPage = () => {
    // 次のページに遷移する処理
    alert('次の画面に進みます！'); // 本来はルーティングを行いますが、ここではダミーのアクション
  };

  return (
    <div className="container">
      <h1 className="title">きゅんぺちゃりぶれ</h1>
      <button className="play-button" onClick={goToNextPage}>PLAY</button>
    </div>
  );
}

export default App;

      <>
        <p>ここにタイトル画面の内容</p>
      </>
  )
}

export default Tittle;