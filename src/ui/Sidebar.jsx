import MainNav from "./MainNav";
import Uploader from "../../data/Uploader";

function Sidebar() {
  return (
    <aside className="styled-sidebar">
      <MainNav />
      <Uploader />
    </aside>
  );
}

export default Sidebar;
