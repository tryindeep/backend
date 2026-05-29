"use client"
import { log } from "console";
import { useState } from "react";

export default function (){
    const [count , setCount] = useState(0);
    // const currentTime = Date.now()
    return (
        <div>
            hi there  {count}
            <button onClick={() => {
                setCount(c => c + 1)
                // console.log(currentTime);
                
            }}> Click me! </button>
        </div>
    )   
}