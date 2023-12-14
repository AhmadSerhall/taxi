import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
const RidesHistory = () => {
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
      <div className="container-rides flex column">
        <h1>Latest Rides</h1>
        {rides.map((ride, index) => (
          <div className="ride-history-details flex space-between">
            <div className="ride-history-details-left flex column space-around">
              <p key={index} className="txt">
                FROM: {ride.location_start}
              </p>

              <p className="txt">To: {ride.location_end}</p>

              <p className="txt">Driver Name: {ride.driver_id}</p>
            </div>
            <div className="ride-history-details-right flex column space-around">
              <p className="txt">Request Date: {ride.created_at}</p>
              <div className="flex ">
                <p className="txt">Status:</p>
                <div className="flex">
                  <div className="btn-done"> {ride.status} </div>
                </div>
              </div>

              <p className="txt">Rate: {ride.rate_user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RidesHistory;
