import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
const RidesHistory = ({ passenger_location, destination, driver_name, request_date, status, rate }) => {
  const [ride, setRide] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/get_doctors.php")
      .then(function (res) {
        setRide(res.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);
  return (
    <div>
      <div className="container-rides flex column">
        <h1>Latest Rides</h1>
        <div className="ride-history-details flex space-between">
          <div className="ride-history-details-left flex column space-around">
            <p className="txt">FROM: {passenger_location}</p>

            <p className="txt">To: {destination}</p>

            <p className="txt">Driver Name: {driver_name}</p>
          </div>
          <div className="ride-history-details-right flex column space-around">
            <p className="txt">Request Date: {request_date}</p>
            <div className="flex ">
              <p className="txt">Status:</p>
              <div className="flex">
                <div className="btn-done"> Done </div>
              </div>
            </div>

            <p className="txt">Rate: {rate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidesHistory;
