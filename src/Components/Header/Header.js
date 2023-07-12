import Style from "./Header.module.css";
import FaBars from "../../Images/solar_hamburger-menu-linear.png";
import OmnigptLogo from "../../Images/omnigptLogo.png";

const Header = () => {
  return (
    <div className={Style.Header}>
      <div className={Style.Logo}>
        <img src={OmnigptLogo} alt="Omnigpt Logo" />
      </div>
      <div className={Style.menuList}>
        <a href="#">Blog</a>
        <a href="#" className={Style.midAtag}>
          Contact us
        </a>
        <a href="#">Sign in</a>
      </div>
      <div className={Style.menuBar}>
        <img src={FaBars} alt="menu-bar" />
      </div>
    </div>
  );
};

export default Header;
