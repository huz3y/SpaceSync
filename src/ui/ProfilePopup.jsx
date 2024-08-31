import { HiOutlineUserCircle, HiOutlineLogout } from "react-icons/hi";

function ProfilePopup() {
  return (
    <div className="profile-popup">
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt="Profile"
        className="profile-popup__image"
      />
      <p className="profile-popup__text">Welcome, user</p>
      <button className="profile-popup__icon-button">
        <HiOutlineUserCircle />
      </button>
      <button className="profile-popup__logout">
        <HiOutlineLogout />
      </button>
    </div>
  );
}

export default ProfilePopup;
