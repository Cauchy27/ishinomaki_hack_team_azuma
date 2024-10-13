"use client"

import * as React from 'react';

import { Button } from '@mui/material';

import { soundPlay } from '../_component/soundPlay';

const SoundEffect = "/sound/result1.mp3";

const Result = () => {

  

  return(
      <>
        <Button
          onClick={()=>{
            soundPlay(SoundEffect);
          }}
        >サウンド再生！</Button>
      </>
  )
}

export default Result;