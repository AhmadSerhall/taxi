import React, { useEffect, useState } from "react";
import "./style.css";

const RideRequest = ({ passenger_location, destination, driver_name, request_date, status, rate }) => {
  const [BGc, setBGc] = useState("grey");
  useEffect(() => {
    if (status === "Approved") {
      setBGc("greenbg");
    } else if (status === "Abandoned") {
      setBGc("redbg");
    } else if (status === "Pending") {
      setBGc("yellowbg");
    }
  }, [status]);

  return (
    <div className={`flex request_card ${BGc} space-around`}>
      <div className="request_card_r flex column">
        <p className="txt">FROM: {passenger_location}</p>

        <p className="txt">To: {destination}</p>

        <p className="txt">Driver Name: {driver_name}</p>
      </div>
      <div className="request_card_r flex column">
        <p className="txt">Request Date: {request_date}</p>

        <p className="txt">Status: {status}</p>

        <p className="txt">Rate: {rate}</p>
      </div>
    </div>
  );
};

export default RideRequest;
