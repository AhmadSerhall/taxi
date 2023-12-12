import dashboard from "../../components/Dashboard/dashboard";
import Adminheader from "../../components/admin_header";
import AdminSidebar from "../../components/admin_sidebar";

const HomePage = () => {
  return (
    <body>
      <AdminSidebar />

      <Adminheader />
      <div className="container2">
        <div className="content">
          <h1 className="content-title" id="content-title">
            Dashboard
          </h1>
        </div>
      </div>
    </body>
  );
};

export default HomePage;
