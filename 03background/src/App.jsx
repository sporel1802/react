import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
<div
  className='w-full h-screen duration-200 flex justify-center items-center'
  style={{ backgroundColor: color }}
>
  <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white  rounded-2xl'>
      <button onClick={()=>setColor("red")}
      className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:"red"}}>Red</button>
       <button   onClick={()=>setColor("green")}
      className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:"green"}}>green</button>
       <button onClick={()=>setColor("blue")}
      className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:"blue"}}>blue</button>
       <button onClick={()=>setColor("olive")}
      className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:"olive"}}>olive</button>
       <button   onClick={()=>setColor("orange")}
      className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor:"orange"}}>orange</button>
   
    </div>
  </div>
</div>

  )
}

export default App

