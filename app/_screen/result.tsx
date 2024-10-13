"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Star, Heart, Award } from 'lucide-react';

import { Button, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';


import { soundPlay } from '../_component/soundPlay';

const SoundEffect = "/sound/result1.mp3";

interface CuteResultScreenProps {
  score1: number;
  score2: number;
  name1:string;
  name2:string;
  message: string;
  goTitle:()=> void
}

const Result: React.FC<CuteResultScreenProps> = ({ score1, score2, name1, name2, message, goTitle}) => {

  useEffect(()=>{
    soundPlay(SoundEffect);
  },[])


  return(
        <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-pink-100 to-purple-100 p-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 text-pink-500">対戦結果！</h1>
            
            <div className="relative mx-auto mb-8">
              <Grid 
                container 
                spacing={1}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid size={6}>
                  <Grid 
                    container 
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid size={10}>
                      <Typography variant='h4' className="font-bold text-purple-600">{name1}</Typography>
                    </Grid>
                    <Grid size={10}>
                      <Typography variant='h4' className="font-bold text-purple-600">{score1}きゅん</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid size={6}>
                  <Grid 
                    container 
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid size={10}>
                      <Typography variant='h4' className="font-bold text-purple-600">{name2}</Typography>
                    </Grid>
                    <Grid size={10}>
                      <Typography variant='h4' className="font-bold text-purple-600">{score2}きゅん</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>

            <p className="text-xl mb-6 text-gray-700">{name1>name2?name1+"の勝ち❤️":name1<name2?name1+"の勝ち❤️":"どっちもかわいい❤️"}</p>

            {/* <Star className="text-yellow-400 w-10 h-10" /> */}
            <Typography variant='h4' className='text-pink-600'>{message}</Typography>


            <Award className="mx-auto text-purple-500 w-16 h-16 mb-6" />

            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300"
              onClick={()=>{goTitle()}}
            >
              タイトルへ！
            </Button>
          </div>
        </div>
  )
}

export default Result;