import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <img className="logo__img" src="/logo.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
