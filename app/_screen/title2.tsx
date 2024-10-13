"use client"

import { builtinModules } from 'module';
import { title } from 'process';
import * as React from 'react';
import { useEffect, useState } from 'react'
import backgroundImage from './assets/images/背景画像.png';

const Title = () => {

    const backgroundImage = {
      height: '50%',
      backgroundImage: 'url(${backgroundImage})',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const [color, setColor] = useState('#ff00ff');

    const toggleColor = () => {
      setColor(prevColor => (prevColor === '#ff00ff' ? '#ff69b4' : '#ff00ff'));
    };

  const [bgColor, setBgColor] = useState('d')

  useEffect(() => {
    document.body.style.background = bgColor;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [bgColor]);

  const style = {
    margin: 'auto',
    width: 'fit-content',
    height: '5vh',
    display: 'block',
    fontSize: '5.5em',
    fontFamily: 'Courier New, Times New Roman, Arial', 
    color: 'darkblue',
  };

  return(
      <>
       <div style={backgroundImage}>
       <div>
       <p style={style}>
          <br />
          かわいい大戦
        </p>
        </div>
        </div>
        <button
          onClick={toggleColor}
          style={{backgroundColor: color, color: 'white', padding: '20px 50px', border: 'none', borderRadius: '50px'}}
          >
            スタート
          </button>
      </>
  );
};

export default Title;