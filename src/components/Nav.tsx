import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-start px-4 mt-4">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-16 h-auto" />
      </Link>
    </div>
  );
};

export default Nav;
