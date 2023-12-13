import React from "react";
import "./index.css";
const RidesHistory = ({ passenger_location, destination, driver_name, request_date, status, rate }) => {
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
