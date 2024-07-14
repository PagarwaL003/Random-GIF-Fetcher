import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';
import { toast } from 'react-toastify';

const API_key ='dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW'

const Random = () => {
     
    const {gif , loading , fetchData} = useGif();

    function clickHandler(){
      fetchData(); 
      console.log("GIF link generated");
      toast.success("GIF Generated Successfully!");
  };
  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      
      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width='450'/>)
      }
      
      <button onClick={clickHandler} className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] hover:bg-yellow-400 hover:font-semibold'>Generate</button>
      
    </div>
  )
}

export default Random
