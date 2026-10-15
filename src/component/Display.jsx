import React,{useState} from "react"
export function Display({value}){
    const style={
        head:{backgroundColor:"red",
              color:"white",
              width:"300px",
        },
        head2:{
            backgroundColor:"green",
            textAlign:"center"
        }
    }
return(
    <>
    <h1 style={style.head2}>internal css</h1>
    <h1 style={style.head}>value:{value}</h1>
    </>
)
}