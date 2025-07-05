import React from "react";
import { useState,useEffect } from "react";

function GitHub() {

        const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Rohan-Koner')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-4xl">GitHub Follow:{data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />

        </div>
    )
}


export default GitHub