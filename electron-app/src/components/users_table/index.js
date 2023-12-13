import Tr from "../passengers/passengers";
import { sendRequest } from "../../../../electron-app/src/core/request";
import { useEffect, useState } from "react";

const UsersTable = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const sendRequest = async () => {
      const myData = await sendRequest("get_all_Passengers", "GET", "");
      setData(myData.passengers);
      console.log(myData);
    };
    sendRequest();
  }, []);
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
            <th></th>
          </tr>
        </thead>
        <tbody id="tbody">
          {!!data && data.map((item) => <Tr data={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
