import React from "react";
import TitleLogo from "../../components/title_logo";
import Button from "../../components/button";
import axios from "axios";
import { useState } from "react";
import "../../styles/global.css";
import "./style.css";

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
    event.preventDefault();
    if (formData.role_id == 3) {
      console.log(formData);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register",
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log(formData);
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/register/driver",
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <section>
      <TitleLogo />
      <form onSubmit={handleSubmit} className="container-signup">
        <div className="signup">
          <h1 className="title">Register</h1>
          <br></br>
          <div className="name-inputs">
            <label>First Name</label>
            <input
              onChange={handleChange}
              className="name-input"
              name="first_name"
              label="First Name"
              placeholder="Enter your First Name"
            />
            <label>Last Name</label>
            <input
              onChange={handleChange}
              className="name-input"
              name="last_name"
              label="Last Name"
              placeholder="Enter your Last Name"
            />
          </div>
          <div className="email-input">
            <label className="label-email">Email:</label>

            <input
              name="email"
              label="Email"
              onChange={handleChange}
              placeholder="Enter your Email"
            />
          </div>
          <div className="password-input">
            <label className="label-pass">Password: </label>
            <input
              onChange={handleChange}
              name="password"
              label="Password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="dropdowns">
            <label htmlFor="genderDropdown">Select Gender:</label>
            <select name="gender" onChange={handleChange} defaultValue="">
              <option disabled value="">
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label htmlFor="roleDropdown">Select Role:</label>
            <select name="role_id" onChange={handleChange} defaultValue="">
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
          <div className="btn-signup">
            <Button
              type="submit"
              backgroundColor="D9D9D8"
              textColor="black"
              text="Sign Up"
            />
          </div>
        </div>
      </form>
    </section>
      );
    };
    
    export default SignUp;