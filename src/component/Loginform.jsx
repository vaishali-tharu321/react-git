import React, { useState } from "react";

export function Loginform() {
    const email = "sumit@gmail.com";
    const Pass = "123";

    const [useremail, setUserEmail] = useState("");
    const [userpass, setUserPass] = useState("");
    const [result, setResult] = useState("");

    function loginData() {
        localStorage.setItem("email", useremail);
        localStorage.setItem("password", userpass);

        if (email === useremail && Pass === userpass) {
            setResult("Welcome " + useremail);
        } else {
            setResult("Invalid Email or Password");
        }
    }

    return (
        <>
            <form style={{
                height:"300px",
                width:"300px",
                backgroundColor:"black",
                color:"white",
            }}>
                <h1>Login Form</h1>

                <label>Email</label>
                <input
                    type="email"
                    onChange={(e) => setUserEmail(e.target.value)}
                />

                <br /><br />

                <label>Password</label>
                <input
                    type="password"
                    onChange={(e) => setUserPass(e.target.value)}
                />

                <br /><br />

                <button type="button" onClick={loginData}>
                    Login
                </button>
            </form>

            <div>
                <h1>{result}</h1>
            </div>
        </>
    );
}