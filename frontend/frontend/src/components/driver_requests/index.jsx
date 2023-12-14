import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

const DriverRequest = ({ passenger_location, destination, driver_name, request_date, status, rate }) => {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rides")
      .then(function (res) {
        setRides(res.data);
      })
      .catch(function (error) {
        console.log("error");
      });
  }, []);

  const handleApprove = async (index) => {
    try {
      const response = await axios.post("http://localhost:8000/api/rides/approve/request", {
        respond: "Approved",
        driver_id: rides[index].driver_id,
      });

      if (response.data.status === "RIDE CREATED") {
        const updatedRides = [...rides];
        updatedRides[index].status = "on going";
        setRides(updatedRides);
      }
    } catch (error) {
      console.error("Error approving request:", error);
    }
  };

  return (
    <div>
      {rides.length > 0 ? (
        rides.map((ride, index) =>
          ride.status === "pending" ? (
            <div key={index} className="container-rides-card flex space-around">
              <div className="left flex column">
                <h1>Latest Request</h1>
                <div className="request_card_l flex column space-around">
                  <p className="txt">FROM: {ride.location_start}</p>
                  <p className="txt">To: {ride.location_end}</p>
                  <p className="txt">Driver Name: {ride.driver_id}</p>
                </div>
              </div>
              <div className="request_card_r flex column space-around">
                <p className="txt">Request Date: {ride.created_at}</p>
                <div className="flex center">
                  <p className="txt">Status:</p>
                  {ride.status === "on going" ? (
                    <div className="ongoing-status">Ongoing</div>
                  ) : (
                    <div className="flex">
                      <button className="btn-app" onClick={() => handleApprove(index)}>
                        Approve
                      </button>
                      <button className="btn-rej"> Reject </button>
                    </div>
                  )}
                </div>
                <p className="txt">Cost: {ride.price}</p>
              </div>
            </div>
          ) : null
        )
      ) : (
        <p>No history</p>
      )}
    </div>
  );
};

export default DriverRequest;
