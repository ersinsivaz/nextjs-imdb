"use client"
import React from 'react'
import { useEffect } from 'react'

export default function Error({error,reset} : any) {
    useEffect(()=>{
        console.log(error);
    },[error]);
  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong</h1>
        <button className='hover:bg-red-300 rounded-lg hover:text-white' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}
