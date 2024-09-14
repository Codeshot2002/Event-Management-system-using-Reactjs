
import "./login.css";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import React, { useState } from 'react';

const LoginForm = () => {


  // States to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  // Handler for form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    if(!isSigningIn){
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email,password)
      window.location.replace('/')
    }


    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container1">
      <div className="login-container">
        <div className="heading">
          Welcome to Spotlight Celebrations
          <br /> Sign into your account
        </div>
        <div className="login-details">
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update state on input change
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
        
        <span id="sign-up">
          You don't have an account? 
          <span
            onClick={() => window.location.replace("/Signup")}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Sign Up
          </span>
        </span>

      </div>
      <div className="image-container">
        <img src="" alt="" id="back-image" />
      </div>
    </div>
  );
};

export default LoginForm;
