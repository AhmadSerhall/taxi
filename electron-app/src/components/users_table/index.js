import Tr from "../passengers/passengers";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UsersTable = () => {
  const Token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/get_users",
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
            <th>Gender</th>
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default UsersTable;
