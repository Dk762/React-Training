import React, { useState } from "react";
import informations from "../information";
import '../Components/Login.css';

function Login() {
    const [contact, setContact] = useState({
        email: "",
        password: "",
    });
    
    return (
        <>
        <div className = "container">
        <h1>Welcome to Login Page</h1>
        <form>
        <label htmlFor="email">Email</label><br></br>
        <input
          type="text"  
          name="email"
          placeholder="email"
        />
        <label htmlFor="password">Password</label><br></br>
        <input
          type="password"
          name="password"
          placeholder="password"
        />
        <button type="submit" onClick={handleClick}>Submit</button>
        </form>
        </div>
  </>
    )
}

export default Login;