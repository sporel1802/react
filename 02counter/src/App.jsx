import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let  [counter,setcounter]= useState(15)
//let counter=18;

const addvalue=()=>{
  console.log("value added",counter);
  counter=counter+1;
  setcounter(counter);
}
const removevalue = () => {
  if (counter > 0) {
    console.log("value removed", counter);
    setcounter(counter - 1);
  } else {
    console.log("counter is already 0");
  }
};

  return (
    <>
 <h1>snehasish </h1>
 <h2>counter value: {counter}</h2>
 <br />
 <button onClick={addvalue}>Add value</button>
 <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
