import React, { useState } from "react"
export function Counter(){
    const [count,setCount]=useState(0)
    return(
        <>
        <div>
            <span> Count : </span>
            <button onClick={()=>setCount(count-1)}> - </button>
            <span> {count} </span>
            <button onClick={()=>setCount(count+1)}> + </button>
        </div>
       
        </>
    )
}