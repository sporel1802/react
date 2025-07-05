import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'



function App() {
  const [count, setCount] = useState(0)

  let myobj={
    username:"snehasish",
    age:21
  }
  let newarr=[1,2,3]
  return (
    <>
          <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-bold my-5">
        Hello Welcome to my YouTube channel
      </h1>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Subscribe
      </button>
    </div>
    <Card channel="sp" someobje={myobj}/>
    <Card someobje={newarr} username="snehasish"/>
 
    </>
  )
}

export default App
