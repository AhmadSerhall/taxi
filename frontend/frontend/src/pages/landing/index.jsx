import React from "react";
import "./style.css";
import TitleLogo from "../../components/title_logo";
import logo from "../../assets/logo.png";
const Landing = () => {
  return (
    <div>
      <header>
        <nav className="container-hero-section flex center space-around">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="nav-comp">Home</div>
          <div className="nav-comp">Request</div>
          <div className="nav-comp">Contact us</div>
        </nav>
        <div className="flex center column">
          <div className="hero-txt">Discover Seamless Transportation with Relaxi Taxi .</div>
          <button className="hero-btn flex ">Browse Our Services</button>
        </div>
      </header>
      <div className="under-hero flex column center">
        <h1> Relaxi Taxi your solution for every need</h1>
        <div className="our-exception flex center gap">
          <div className="card flex column center">
            <h3>Quality</h3>
            <div className="e-txt">We ensures you the best quality services</div>
          </div>
          <div className="card flex column center">
            <h3>Reliable</h3>
            <div className="e-txt">You can rely on our services anytime</div>
          </div>
          <div className="card flex column center">
            <h3>Affordable</h3>
            <div className="e-txt">Our services are very cheap and affordable</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
