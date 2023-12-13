import React from "react";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../../../electron-app/src/core/request";

const AdminHeader = () => {
  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    try {
      const data = await sendRequest({
        route: "logout",
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(data);

      if (data.status === "success") {
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
