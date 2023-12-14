import { sendRequest } from "../../../../electron-app/src/core/request";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Tr = (props) => {
  const Token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

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

        setData(response.data.passengers);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [Token]);

  const deletePassenger = async (passengerId) => {
    try {
      const formData = new FormData();
      formData.append("id", passengerId);

      const data = await sendRequest({
        route: "delete_user",
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <table>
        <tbody>
          {data.map((user) => (
            <tr key={user.user_id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tr;
