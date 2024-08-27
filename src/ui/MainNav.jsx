import { FiBox, FiCalendar, FiHome, FiSettings, FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function MainNav() {
  return (
    <nav className="MainNav">
      <div className="MainNav__logo">
        <Logo />
      </div>
      <ul className="MainNav__list">
        <li className="MainNav__item">
          <NavLink className="MainNav__link" to="/dashboard">
            <FiHome className="MainNav__icon" />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="MainNav__item">
          <NavLink className="MainNav__link" to="/bookings">
            <FiCalendar className="MainNav__icon" />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li className="MainNav__item">
          <NavLink className="MainNav__link" to="/spaces">
            <FiBox className="MainNav__icon" />
            <span>Spaces</span>
          </NavLink>
        </li>
        <li className="MainNav__item">
          <NavLink className="MainNav__link" to="/create-user">
            <FiUsers className="MainNav__icon" />
            <span>Create User</span>
          </NavLink>
        </li>
        <li className="MainNav__item">
          <NavLink className="MainNav__link" to="/settings">
            <FiSettings className="MainNav__icon" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      <div className="MainNav__footer">
        <p className="MainNav__copyright">&copy; 2024 SpaceSync</p>
      </div>
    </nav>
  );
}

export default MainNav;
