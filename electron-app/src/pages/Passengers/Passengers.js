import Adminheader from "../../../../electron-app/src/components/admin_header";
import AdminSidebar from "../../../../electron-app/src/components/admin_sidebar";
import UsersTable from "../../components/users_table";

const Passengers = () => {
  return (
    <body>
      <AdminSidebar />

      <Adminheader />
      <div className="container2">
        <div className="content">
          <h1 className="content-title" id="content-title">
            Passengers
          </h1>
          <UsersTable />
        </div>
      </div>
    </body>
  );
};

export default Passengers;
