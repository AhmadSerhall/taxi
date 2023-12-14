import React, { useState } from "react";
import "./style.css";
import "../../styles/global.css";
import TitleLogo from "../../components/title_logo";
import Input from "../../components/input";
import Button from "../../components/button";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/getchat", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  return (
    <div className="center">
      <TitleLogo />
      <div className="container flex center prim-clr-bg">
        <div className="items flex column">
          <h1 className="title">Login</h1>
          <Input
            className="input"
            name="email"
            placeholder="Enter your email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="input"
            name="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="button-login"
            color="black"
            backgroundColor="#D9D9D8"
            text="Login"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
