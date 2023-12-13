import dashboard from "../../../../electron-app/src/components/Dashboard/dashboard";
import Adminheader from "../../../../electron-app/src/components/admin_header";
import AdminSidebar from "../../../../electron-app/src/components/admin_sidebar";
import Chat from "../../../../electron-app/src/components/chat";

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
      <Chat />
    </body>
  );
};

export default HomePage;
