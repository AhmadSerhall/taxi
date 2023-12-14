import React, { useEffect, useState } from "react";
import RideRequest from "../../components/ride_request";
import RequestForm from "../../components/request_form";
import "./index.css";
import Navbar from "../../components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const YourRides = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/hospital-mng/backend/doctors/get_doctors.php")
      .then(function (res) {
        setRequests(res.data);
        return console.log(requests);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="main-container flex space-around">
        <div className="requests flex column gap">
          <RideRequest status={"Pending"} />
          <RideRequest status={"Approved"} />
          <RideRequest status={"Rejected"} />
        </div>

        <RequestForm />
      </div>
      </div>
  );
};

export default YourRides;
