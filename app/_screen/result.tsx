"use client"

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Star, Heart, Award } from 'lucide-react';

import { Button } from '@mui/material';

import { soundPlay } from '../_component/soundPlay';

const SoundEffect = "/sound/result1.mp3";

interface CuteResultScreenProps {
  score: number;
  totalQuestions: number;
  message: string;
  goTitle:()=> void
}

const Result: React.FC<CuteResultScreenProps> = ({ score, totalQuestions, message, goTitle}) => {

  const percentage = (score / totalQuestions) * 100;

  useEffect(()=>{
    soundPlay(SoundEffect);
  },[])


  return(
        <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-r from-pink-100 to-purple-100 p-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 text-pink-500">Your Result</h1>
            
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-8 border-purple-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-purple-600">{score}/{totalQuestions}</span>
              </div>
              <Star className="absolute top-0 right-0 text-yellow-400 w-10 h-10" />
              <Heart className="absolute bottom-0 left-0 text-red-400 w-10 h-10" />
            </div>

            <p className="text-xl mb-6 text-gray-700">{message}</p>

            <div className="flex justify-center items-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${i < Math.round(percentage / 20) ? 'text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>

            <Award className="mx-auto text-purple-500 w-16 h-16 mb-6" />

            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300"
              onClick={()=>{goTitle()}}
            >
              Play Again
            </Button>
          </div>
        </div>
  )
}

export default Result;