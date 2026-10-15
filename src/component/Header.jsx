import React from "react"
import './style.css'
export function Header(){
    return(<>
        <header className="header">
           <nav className="navbar">
             <a href="/form" className="link1">Logo</a>
            <a href="" className="link">Home </a>
             <a href="" className="link">About</a>
             <a href="" className="link">Services</a>
            
           </nav>
        </header>
           </>
    )
}