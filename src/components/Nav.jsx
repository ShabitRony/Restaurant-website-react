import Logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa6";
const Nav = () => {
  return (
    <nav>
      <div className="navigation container">
        <div className="logo_container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="bar_icons">
          <FaBars />
        </div>
      </div>
    </nav>
  );
};
export default Nav;
