import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './component/login'
import Profile from './component/profile'

function App() {


  return (
    <Usercontextprovider >
<h1>snehasish porel react</h1>
<Login/>
<Profile/>
    </Usercontextprovider>
  )
}

export default App
