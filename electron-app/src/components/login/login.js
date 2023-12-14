import React, { useRef } from "react";
import { sendRequest } from "../../core/request";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
      if (response.data) {
        localStorage.setItem("token", response.data.authorisation.token);
        navigate("/admin_panel");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  // const navigate = useNavigate();
  // const emailRef = useRef("");
  // const passwordRef = useRef("");

  // const saveToken = async () => {
  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;

  //   const formData = new FormData();
  //   formData.append("email", email);
  //   formData.append("password", password);

  //   try {
  //     const data = await sendRequest("login", "POST", formData);
  //     console.log("data", data.authorisation.token);

  //     if (data.user) {
  //       localStorage.setItem("token", data.authorisation.token);
  //       navigate("/admin_panel");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="lgn-container">
      <form className="login-container" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <div className="login-form">
          <label htmlFor="email" className="username_title">
            Email
            <br />
            <br />
          </label>

          <input
            name="email"
            type="text"
            id="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <label htmlFor="password" className="password_title">
            Password
            <br />
            <br />
          </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <div className="login-button-div">
            <button type="submit" className="login-button" id="login-button">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
