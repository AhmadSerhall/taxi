import React from "react";
import "./style.css";
import "../../styles/global.css";
import TitleLogo from "../../components/title_logo";
import Input from "../../components/input";
import Button from "../../components/button";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formData
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  return (
    <div className="center">
      <TitleLogo />
      <form
        onSubmit={handleSubmit}
        className="container flex center prim-clr-bg"
      >
        <div className="items flex column">
          <h1 className="title">Login</h1>
          <label>Email</label>
          <input name="email" type="email" onChange={handleChange} required />
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="button-login"
            color="black"
            backgroundColor="#D9D9D8"
            text="login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
