import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
// export function Home(props){
export function Home({email,city}){
     const name="developer"
    return(
       <>
        <div>
        <h1>I am From Home Component</h1>
        <p>Home.jsx file is displayed</p>
        <h1>hello {name}</h1>
        {/* <h1>Email {props.email}</h1> 
        <h1>City: {props.city}</h1> */}
        <h1>Email {email}</h1>
        <h1>City: {city}</h1> /*props instructuring*/

        </div>
        <div>
            <h2>box 2</h2>
        </div>
        </>
    )
}
