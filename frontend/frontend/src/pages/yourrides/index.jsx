import React from "react";
import RideRequest from "../../components/ride_request";
import RequestForm from "../../components/request_form";
import "./index.css";
const YourRides = () => {
  return (
    <div className="flex space-around">
      <div className="requests flex column gap">
        <RideRequest status={"Pending"} />
        <RideRequest status={"Approved"} />
      </div>

      <RequestForm />
    </div>
  );
};

export default YourRides;
