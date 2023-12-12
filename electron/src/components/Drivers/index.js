import React from "react";
import { sendRequest } from "../../core/request";
import { useNavigate } from "react-router-dom";
useNavigate;
const Login = () => {
  return (
    <div className="lgn-container">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <div className="login-form">
          <label htmlFor="email" className="username_title">
            Email
            <br />
            <br />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
