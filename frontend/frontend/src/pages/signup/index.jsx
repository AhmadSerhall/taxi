// SignUp.js

import React from "react";
import TitleLogo from "../../components/title_logo";
import Button from "../../components/button";
import Input from "../../components/input";
import Dropdown from "../../components/drop_down_gender";
import Dropdown2 from "../../components/drop_down_type";
import axios from "axios";
import { useState } from "react";
import "../../styles/global.css";
import "./style.css"; // Import the style.css file

import Navbar from "../../components/navbar";

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    gender: "",
    role_id: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    if (formData.role_id || formData.gender) {
      console.log(formData);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error("Please select your gender");
      }
    } else {
      const x = document.getElementById("visible");
      x.innerText = "Gender and Role Required";
    }
  };

  return (
    <section>
      <TitleLogo />
      <form onSubmit={handleSubmit} className="container-signup">
        <div className="signup">
          <div className="name-inputs">
            <label htmlFor="first_name">First Name:</label>
            <input
              onChange={handleChange}
              className="name-input"
              name="first_name"
              id="first_name"
              placeholder="Enter your First Name"
            />
            <label htmlFor="last_name">Last Name:</label>
            <input
              onChange={handleChange}
              className="name-input"
              name="last_name"
              id="last_name"
              placeholder="Enter your Last Name"
            />
          </div>
          <div className="email-input">
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your Email"
            />
          </div>
          <div className="password-input">
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleChange}
              name="password"
              id="password"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="dropdowns">
            <label htmlFor="genderDropdown">Select Gender:</label>
            <select
              name="gender"
              id="genderDropdown"
              onChange={handleChange}
              defaultValue=""
            >
              <option disabled value="">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="roleDropdown">Select Role:</label>
            <select
              name="role_id"
              id="roleDropdown"
              onChange={handleChange}
              defaultValue=""
            >
              <option disabled value="">
                Select Role
              </option>
              <option value="3">Passenger</option>
              <option value="2">Driver</option>
            </select>
          </div>
          <div>
            <label id="visible"></label>
          </div>
        </div>
        <div className="btn-signup">
          <Button
            type="submit"
            backgroundColor="D9D9D8"
            textColor="black"
            text="Sign Up"
          />
        </div>
      </form>
    </section>
  );
};

export default SignUp;
