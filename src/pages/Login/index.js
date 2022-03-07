import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo/icon.png";

import "./styles.css";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  
    return (
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
             
              <span className="login-form-title">
                <img src={Logo} alt="Logo Theiaxp" />
              </span>
  
              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
  
              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>
  
              <div className="container-login-form-btn">
                <button className="login-form-btn"><a href="/home">Login</a></button>
              </div>
  
              <div className="text-center">
                <span className="txt1">
                    Don't have an account?</span>
                <a className="txt2" href="#">
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
export default App;