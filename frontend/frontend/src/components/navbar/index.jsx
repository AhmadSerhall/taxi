import React from "react";
import "./index.css";
function index(props) {
  return (
    <section className="container">
      <div className="logo"></div>
      <div className="title">
        <h1>Search Riders</h1>
      </div>
      <div className="button-container">
        <button className="btn">Home</button>
        <button className="btn">Services</button>
        <button className="btn">Contact Us</button>
      </div>
      <div className="profile"></div>
    </section>
  );
}

export default index;
