import React from "react";
import { useNavigate } from "react-router-dom";

const AdminSidebar = (props) => {
  const navigate = useNavigate();

  const goDashboards = () => {
    navigate("/admin_panel");
  };
  const goPassengers = () => {
    navigate("/admin_panel/passengers");
  };
  const goDrivers = () => {
    navigate("/admin_panel/drivers");
  };
  const goRides = () => {
    navigate("/admin_panel/rides");
  };

  return (
    <div className="side-panel">
      <div className="dashboard-btn" id="dashboard-btn" onClick={goDashboards}>
        Dashboard
      </div>
      <div className="passenger-btn" id="passenger-btn" onClick={goPassengers}>
        Passengers
      </div>
      <div className="driver-btn" id="driver-btn" onClick={goDrivers}>
        Drivers
      </div>
      <div className="driver-btn" id="passenger-btn" onClick={goRides}>
        Rides
      </div>
    </div>
  );
};

export default AdminSidebar;
