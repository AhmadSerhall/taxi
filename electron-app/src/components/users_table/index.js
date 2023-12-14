import Tr from "../passengers/passengers";
import { sendRequest } from "../../../../electron-app/src/core/request";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsersTable = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  const handleSubmit = async () => {
    console.log(formData);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/get_users");

      console.log(response.data);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  // const [data, setData] = useState("");
  // useEffect(() => {
  //   const sendRequest = async () => {
  //     const myData = await sendRequest("get_users", "GET", "");
  //     setData(myData.passengers);
  //     console.log(myData);
  //   };
  //   sendRequest();
  // }, []);
  return (
    <div className="table-container">
      <table>
        <thead id="thead">
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Trips</th>
            <th>Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {/* {!!data && data.map((item) => <Tr data={item} />)} */}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
