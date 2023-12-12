import { sendRequest } from "../../core/request";
import Tr from "../Drviers/Drivers";
import { useEffect, useState } from "react";

const DriversTable = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myData = await sendRequest({
          route: "get_all_drivers",
          method: "GET",
        });

        setData(myData.drivers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
            <th>Earned</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tbody">
          {!!data && data.map((item) => <Tr key={item.id} data={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default DriversTable;
