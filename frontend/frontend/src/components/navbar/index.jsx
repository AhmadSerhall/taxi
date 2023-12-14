import React from "react";
import logo from "../../assets/logo.png";
import pp from "../../assets/pp.png";
import "./style-navbar.css";
const Navbar = () => {
  return (
    <section className="container-navbar">
      <div className="logo-navbar">
        <img src={logo} alt="null" />
      </div>
      <div className="title-navbar">
        {/* <h1>Search Riders</h1> */}
      </div>
      <div className="button-container-navbar">
        <a
          className="btn-navbar"
          onClick={() => this.handleClick("Contact Us")}
        >
          Home
        </a>
        <a
          className="btn-navbar"
          onClick={() => this.handleClick("Contact Us")}
        >
          Services
        </a>
        <a
          className="btn-navbar"
          onClick={() => this.handleClick("Contact Us")}
        >
          Contact Us
        </a>
      </div>
      {/* <div className="profile-navbar">
        <img src={pp} alt="null" />
      </div> */}
    </section>
  );
};
export default Navbar;
