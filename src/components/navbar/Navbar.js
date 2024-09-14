import React from "react";
import "./navbar.css"
import {Link, Navigate} from "react-router-dom"
function Navbar() {

  const handleLogin=()=>{
    window.location.replace('/Login');
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbarBody">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div className="loginButton">
        <button type="button" class="btn btn-light" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
