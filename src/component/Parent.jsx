import React,{useState} from "react"
import { Display } from "./Display"
import { About } from "./About"
export function Parent(){
    const [value,setValue]=useState("lifting ")    

return(
    <>
    <div>
    <Display value={value}/>
    <About value={value}/>
    </div>
    </>
)
}