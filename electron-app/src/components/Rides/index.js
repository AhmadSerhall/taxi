import { sendRequest } from "../../core/request";
import { useEffect, useState } from "react";
import Tr from "../Drivers/Drivers";

const RidesComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myData = await sendRequest({
          route: "get_all_rides",
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
            <th>Driver</th>
            <th>Passenger</th>
            <th>From-To</th>
            <th>Status</th>
            <th>Price</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {!!data && data.map((item) => <Tr key={item.id} data={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default RidesComponent;
