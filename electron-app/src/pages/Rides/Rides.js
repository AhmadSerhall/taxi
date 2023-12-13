import Adminheader from "../../../../electron-app/src/components/admin_header";
import AdminSidebar from "../../../../electron-app/src/components/admin_sidebar";
import RidesComponent from "../../components/Rides";

const Rides = () => {
  return (
    <body>
      <AdminSidebar />
      <Adminheader />
      <div className="container2">
        <div className="content">
          <h1 className="content-title" id="content-title">
            Rides
          </h1>
          <RidesComponent />
        </div>
      </div>
    </body>
  );
};

export default Rides;
