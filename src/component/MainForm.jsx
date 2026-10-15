import React ,{useState}from "react";

export function MainForm(){
    //           Controlled form
    // name email password gender checkboc textarea
    // select option drop down for city
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [gender,setGender]=useState("")
    const [IsChecked,setIsChecked]=useState("")
    const [message,setMessage]=useState("")
    const [city,setCity]=useState("")
    function handleSumit(e){
        e.preventDefault()
        console.log("Name",name)
        console.log("Email",email)
        console.log("Password",password)
        console.log("gender",gender)
        console.log("Message",message)
        console.log("Checked",IsChecked)
        console.log("City",city)
      setName("")
      setEmail("")
      setPassword("")
      setGender("")
      setIsChecked("false")
      setMessage("")
      setCity("")
    }
    return(
        <>
        <form onSubmit={handleSumit}
        style={{
            height:"300px",
            width:"250px",
            backgroundColor:"green",
            padding:"30px",
            alignContent:"center",
            position:"relative",
            left:"80px"
        }}>
            <label >Name</label>
            <input type="text" placeholder="Enter name" value={name}
             onChange={(e)=>setName(e.target.value)}/><br /><br />
            <label >Email</label>
            <input type="Email" placeholder="Enter Email" value={email} 
            onChange={(e)=>setEmail(e.target.value)}/><br /><br />
            <label >password</label>
            <input type="password" placeholder="Enter Password" value={password} 
            onChange={(e)=>setPassword(e.target.value)}/><br /><br />
            <label >Gender :</label>
           <input type="radio" value="Male" checked={gender==="Male"} 
           onChange={(e)=>setGender(e.target.value)}  />Male
           <input type="radio" value="Female" checked={gender==="Female"} 
           onChange={(e)=>setGender(e.target.value)}  />Female <br />
           <label ></label>
           <input type="checkbox" checked={IsChecked} 
           onChange={(e)=>setIsChecked(e.target.value)} /><br />
           <textarea  placeholder="enter your message" 
            value={message} onChange={(e)=>setMessage(e.target.value)}
           ></textarea><br />
           <select value={city}onChange={(e)=>setCity(e.target.value)}>
            <option value="Mumbai">mumbai</option>
            <option value="Agra">agra</option>
            <option value="Goa">goa</option>
           </select>
           <button>submit</button>
            </form></>
    )
}