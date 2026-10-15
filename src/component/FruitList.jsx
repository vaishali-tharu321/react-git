import React from "react"
export function FruitList(){
    const fruits=["apple","mango","banana","grapes","guava"]
    const fruits1=[]
    return(
     <>
     <ul >
        {fruits.map((fruit)=><li>{fruit}</li>)}
     </ul>

     <ul >
        {fruits.map((fruit,index)=><li key={index}>{index} {fruit}</li>)}
     </ul>
     <div>
        {
        fruits1.length===0?(<h2>No Fruits Available</h2>):
        (<ol>{fruits1.map(fruit =><li>{fruit}</li>)}</ol>)
        }
        
     </div>
     </>   
    )
}