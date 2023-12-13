import React from "react";
import Navbar from "../../components/navbar";
import DriverRequest from "../../components/driver_requests";
import RidesHistory from "../../components/rides_history";

const DriversRequest = () => {
  return (
    <div>
      <Navbar />
      <div>
        <DriverRequest />
      </div>
      <RidesHistory />
    </div>
  );
};

export default DriversRequest;
