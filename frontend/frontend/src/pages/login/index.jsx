import React from "react";
import "./style.css";
import "../../styles/global.css";
import TitleLogo from "../../components/title_logo";
import Input from "../../components/input";
import Button from "../../components/button";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
      navigate("/");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  return (
    <section>
      <TitleLogo />
      <form onSubmit={handleSubmit} className="container-login">
        <div className="items flex column">
          <h1 className="title">Login</h1>
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Enter your Password"
            required
          />
          <div className="btn-submit">
            <Button type="submit" text="login" />
          </div>
          <div className="create-acc">
            <Link to="/signup">Create a new account</Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
