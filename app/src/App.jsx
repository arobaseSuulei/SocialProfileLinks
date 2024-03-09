import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





export default function App() {
  return ( 
    <>

<div className='flex items-center justify-center min-h-screen  '>
  <div className='flex flex-col  w-80 py-20 bg-neutral-800 rounded-lg gap-4 p-8  '>
    <div>
      <img className='h-12 w-12 flex-none rounded-full bg-gray-50 mx-auto' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    </div> 
    <div> <p className='text-white font-semibold'>Jessica Randall</p>  <p class="text">United Kingdom</p> </div> 
    <div className='text-xs text-white'>"FontEnd Developer and avid reader"</div> 
    <div className='flex flex-col gap-4'>
      <div className='bg-neutral-700 text-white rounded-md p-2 text-xs hover:bg-white hover:text-black transition bg-white delay-150 ease-in-out '>GitHub</div>
      <div className='bg-neutral-700 text-white rounded-md p-2 text-xs hover:bg-white hover:text-black transition bg-white delay-150 ease-in-out'>Twitter</div>
      <div className='bg-neutral-700 text-white rounded-md p-2 text-xs hover:bg-white hover:text-black transition bg-white delay-150 ease-in-out'>Instagram</div>
      <div className='bg-neutral-700 text-white rounded-md p-2 text-xs hover:bg-white hover:text-black transition bg-white delay-150 ease-in-out'>LinkedIn</div>
    </div> 
  </div>

  <div className='flex flex-row' >
      <img src="" alt="" />
  </div>
</div>



</> 



 


  )
}
