import React,{useState,useContext} from "react";
import Usercontext from "../context/Usercontext";


function Login(){

    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    const{setUser}=useContext(Usercontext)
    const handelsubmit=(e)=>{
        e.preventDefault()
        setUser({username,password});
    };
    return(
        <div>
            <input type="text" 
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            placeholder="username" />
            <input type="text"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            placeholder="password" />
            <button onClick={handelsubmit}>submit</button>
        </div>
    )
}

export default Login