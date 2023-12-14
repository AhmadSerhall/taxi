import React from "react";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../../electron-app/src/core/request";
import axios from "axios";

const AdminHeader = () => {
  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    try {
      console.log("HELLO");
      const response = await axios.post("http://localhost:8000/api/logout");
      console.log(response);
      console.log(response.status);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="admin_name">Hello Admin</div>
        <button className="logout" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
