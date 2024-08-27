import { Outlet } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="appLayout">
      <Sidebar />
      <main className="appLayout__main">
        <Outlet />
        <div className="appLayout__profile-popup">
          <ProfilePopup />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
