
import React from "react";

export function Form() {

    function saveData(e) {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Data Local Storage me save ho gaya");
    }

    return (
        <>
            <div
                style={{
                    width: "400px",
                    height: "200px",
                    border: "2px solid green",
                    margin: "100px",
                    backgroundColor: "black",
                    borderRadius: "10px"
                }}
            >
                <form
                    onSubmit={saveData}
                    style={{
                        backgroundColor: "blue",
                        margin: "20px",
                        borderRadius: "10px",
                        height: "150px"
                    }}
                >

                    <label
                        style={{
                            color: "white",
                            marginLeft: "20px",
                            fontWeight: "bold"
                        }}
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        style={{
                            width: "245px",
                            height: "30px",
                            borderRadius: "10px"
                        }}
                    />

                    <br /><br />

                    <label
                        style={{
                            color: "white",
                            marginLeft: "20px",
                            fontWeight: "bold"
                        }}
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        style={{
                            width: "220px",
                            height: "30px",
                            borderRadius: "10px"
                        }}
                    />

                    <br /><br />

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "red",
                            width: "180px",
                            height: "40px",
                            color: "white",
                            fontSize: "20px",
                            borderRadius: "10px",
                            marginLeft: "100px"
                        }}
                    >
                        Submit
                    </button>

                </form>
            </div>
        </>
    );
}

