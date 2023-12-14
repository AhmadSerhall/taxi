import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
const DriverRequest = ({ passenger_location, destination, driver_name, request_date, status, rate }) => {
  const [rides, setRide] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rides")
      .then(function (res) {
        setRide(res.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);
  return (
    <div>
      <div className="container flex space-around ">
        <div className="left flex column">
          <h1>Latest Request</h1>
          <div className="request_card_l flex column space-around">
            <p className="txt">FROM: {passenger_location}</p>

            <p className="txt">To: {destination}</p>

            <p className="txt">Driver Name: {driver_name}</p>
          </div>
        </div>
        <div className="request_card_r flex column space-around">
          <p className="txt">Request Date: {request_date}</p>
          <div className="flex center">
            <p className="txt">Status:</p>
            <div className="flex">
              <button className="btn-app"> Approve </button>
              <button className="btn-rej"> rejected </button>
            </div>
          </div>

          <p className="txt">Cost: 20</p>
        </div>
      </div>
    </div>
  );
};

export default DriverRequest;
