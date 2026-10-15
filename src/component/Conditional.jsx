import React from "react"
export function Conditional(){
    //Conditional Rendering
    const isLoggedIn=false;
//     if(isLoggedIn===true)
// {
//     return <h1>Welcome Back User</h1>
// }
// else
// {
//     return <h1>You are not logged in</h1>
// }

//ternary operator
const cart=["apple","mango","orange","banana","grapes"]
return(
  <>
  <div>{isLoggedIn===true?<h1>Welcome Back User</h1>: <h1>You are not logged in</h1>}
    </div>
    //logical and operator
    <div>
        {cart.length>0 && <h1>you have {cart.length} item in cart</h1>}
    </div>
  </>
  )
}