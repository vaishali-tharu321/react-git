import React from "react"
// switchcase
export function Switchcase(){
    const status="loading"
    switch(status){
        case "loading":
            return <h1>loading.....</h1>
        case "success":
            return <h1>success</h1>
        case "error":
            return <h1>Error happen</h1>
        default:
            return <h2>unknown status</h2>
    }
    
//define a login form have email id password and logout button with welocme __name
}