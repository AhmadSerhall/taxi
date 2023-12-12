import { sendRequest } from "../../core/request";

sendReuest;
const Tr = (props) => {
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
    <tr>
      <td>{props.data.first_name}</td>
      <td>{props.data.last_name}</td>
      <td>{props.data.email}</td>
      <td>{props.data.total_trips}</td>
      <td>{props.data.total_paid}</td>
      <td>
        <div
          className="delete_btn"
          onClick={() => deletePassenger(props.data.passenger_id)}
        >
          Delete
        </div>
      </td>
    </tr>
  );
};

export default Tr;
