/* eslint-disable jsx-a11y/anchor-is-valid */
import Style from "./Header.module.css";
import Images from "../../Constants/Image"

const Header = (props) => {
  return (
    <div className={Style.Header}>
      <div className={Style.Logo}>
        <img src={Images.OmnigptLogo} alt="Omnigpt Logo" />
      </div>
      <div className={Style.menuList}>
        <a href="#">Blog</a>
        <a href="#" className={Style.midAtag}>
          Contact us
        </a>
        <a href="#">Sign in</a>
      </div>
      <div className={Style.menuBar} onClick={props.onClick}>
        <img src={Images.FaBars} alt="menu-bar" />
      </div>
    </div>
  );
};

export default Header;
