import React from "react";
import RideRequest from "../../components/ride_request";
import RequestForm from "../../components/request_form";
import "./index.css";
import Navbar from "../../components/navbar";
const YourRides = () => {
  return (
    <>
      <Navbar />
      <div className="main-container flex space-around">
        <div className="requests flex column gap">
          <RideRequest status={"Pending"} />
          <RideRequest status={"Approved"} />
          <RideRequest status={"Rejected"} />
        </div>

        <RequestForm />
      </div>
    </>
  );
};

export default YourRides;
