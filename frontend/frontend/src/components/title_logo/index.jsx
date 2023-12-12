import React from 'react';
import "./style.css";
import "../../styles/global.css";
import logo from "../../assets/logo.png";
const TitleLogo = () => {
  return (
    <div>
      <div className='title-logo flex row center'>
        <img src={logo} alt="logo"/>
        <h1>Relaxi Taxi</h1>
      </div>
    </div>
  )
}

export default TitleLogo
