import { useState ,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [length ,getlength]=useState(8)
 const [number,setnumber]=useState(false)
 const [char,setchar]=useState(false)
 const [password,setpassword]=useState("")
 //use ref hook
  const passref=useRef(null)
 //use callback
 const passwordgenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(number){
  str+="013456789"
  }
  if(char){
    str+="!@#$%^&*(){}[]~"
  }
  for(let i=1;i<=length;i++){
 let charIndex = Math.floor(Math.random() * str.length+1)
pass += str.charAt(charIndex)
  }

    setpassword(pass)
 },[length,number,char,password])

 const copypassword=useCallback(()=>{
  passref.current?.select();
  window.navigator.clipboard.writeText(password)
 },[password])
//use useeffect
 useEffect(()=>{
  passwordgenerator()
 },[length,number,char])
  return (
    <><div className='text-center bg-amber-500 m-20 p-2'>
      <h1 className='text-4xl text-center text-black'>
    Password generator
  </h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-cyan-500'>
      
      <div className='flex shadow rounded-lg overflow-hidden md-4 p-1.5'>
        <input type="text" value={password} className='outlinr-none w-full py-1 px-3 bg-amber-50'placeholder='password' />
        <button onClick={copypassword} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink'>copy</button>
      </div>
      <div className='flex text-sn gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={16}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{getlength(e.target.value)}}/>
          <label>length:{length}</label>
        </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultValue={number}
            id='numberInput'
            onChange={(e)=>{
              setnumber((prev)=>!prev);
            }} />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultValue={char}
            id='charInput'
            ref={passref}
            onChange={() => setchar(prev => !prev)}

             />
            <label htmlFor="charInput">CharacterInput</label>
          </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
