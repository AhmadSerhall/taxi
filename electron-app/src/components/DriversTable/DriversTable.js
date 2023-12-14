import { sendRequest } from "../../core/request";
import { useEffect, useState } from "react";
import Tr from "../Drivers/Drivers";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DriversTable = () => {
  const Token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_all_drivers",
          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        );

        console.log("Response Data:", response.data);

        // Assuming the array is nested under the 'data' property
        setData(response.data?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Token]);

  return (
    <div className="table-container">
      <table>
        <thead id="thead">
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Trips</th>
            <th>Earned</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr key={user.user_id}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriversTable;
