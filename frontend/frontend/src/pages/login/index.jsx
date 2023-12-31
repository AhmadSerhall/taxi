import React from "react";
import "./style.css";
import "../../styles/global.css";
import TitleLogo from "../../components/title_logo";
import Input from "../../components/input";
import Button from "../../components/button";
const Login = () => {
  return (
    <div className="center">
      <TitleLogo />
      <div className="container flex center prim-clr-bg">
        <div className="items flex column">
          <h1 className="title">Login</h1>
          <Input className="input" name="email" placeholder="enter your email" label="email" />
          <Input className="input" name="password" placeholder="enter your password" label="password" />
          <Button className="button-login" color="black" backgroundColor="#D9D9D8" text="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
