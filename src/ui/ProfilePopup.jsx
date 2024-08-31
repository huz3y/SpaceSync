import { HiOutlineUserCircle, HiOutlineLogout } from "react-icons/hi";
import { useLogout } from "../features/authentication/useLogout";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProfilePopup() {
  const { logout, isLoading } = useLogout();
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  const navigate = useNavigate();
  return (
    <div className="profile-popup">
      <img
        src={`${avatar}` || "/default-user.jpg"}
        alt="Profile"
        className="profile-popup__image"
      />
      <p className="profile-popup__text">Welcome, {fullName}</p>
      <button
        className="profile-popup__icon-button"
        onClick={() => navigate("/update-account")}
      >
        <HiOutlineUserCircle />
      </button>
      <button
        className="profile-popup__logout"
        disabled={isLoading}
        onClick={logout}
      >
        <HiOutlineLogout />
      </button>
    </div>
  );
}

export default ProfilePopup;
