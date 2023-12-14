import React from "react";
import "./style.css";
import TitleLogo from "../../components/title_logo";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
      <header>
        <nav className="container-hero-section flex center space-around">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="navigation">
      <Link to="/" className="nav-comp">
        Home
      </Link>
      <Link  className="nav-comp">
        About us
      </Link>
      <Link  className="nav-comp">
        Contact us
      </Link>
    </div>
        </nav>
        <div className="flex center column">
          <div className="hero-txt">Discover Seamless Transportation with Relaxi Taxi .</div>
          <Link to ="/ride"><button className="hero-btn ">Browse Our Services</button></Link>
        </div>
      </header>
      <div className="under-hero flex column center">
        <h1> Relaxi Taxi your solution for every need</h1>
        <div className="our-exception flex center gap">
          <div className="card flex column center">
            <h3>Quality</h3>
            <div className="e-txt">We ensures you the best quality services</div>
          </div>
          <div className="card flex column center middle">
            <h3>Reliable</h3>
            <div className="e-txt" >You can rely on our services anytime</div>
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