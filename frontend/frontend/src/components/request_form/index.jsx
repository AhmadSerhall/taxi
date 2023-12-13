import React from "react";
import "./index.css";
import taxi from "../../assets/taxi.png";
import taxiicon from "../../assets/taxi-icon.png";
const RequestForm = () => {
  return (
    <>
      <div className="wrapper flex column">
        <div className="container flex column">
          <h2>Request A Ride</h2>
          <button className="btn1">Add Your Destination</button>
          <button className="btn-2 flex center">
            <span>Enjoy Your Ride ! </span>
            <img src={taxiicon} width="20" />
          </button>
        </div>
        <div className="image">
          <img src={taxi} alt="" />
        </div>
      </div>
    </>
  );
};

export default RequestForm;
