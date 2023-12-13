import React from "react";
import logo from "../../assets/logo.png";
import pp from "../../assets/pp.png";
import "./style.css";
const Navbar = () => {
  return (
    <section className="container">
      <div className="logo">
        <img src={logo} alt="null" />
      </div>
      <div className="title">
        <h1>Search Riders</h1>
      </div>
      <div className="button-container">
        <a className="btn" onClick={() => this.handleClick("Contact Us")}>
          Home
        </a>
        <a className="btn" onClick={() => this.handleClick("Contact Us")}>
          Services
        </a>
        <a className="btn" onClick={() => this.handleClick("Contact Us")}>
          Contact Us
        </a>
      </div>
      <div className="profile">
        <img src={pp} alt="null" />
      </div>
    </section>
  );
};
export default Navbar;
