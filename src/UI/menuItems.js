import FaClose from "../Images/close.png";
import Style from "./menuItem.module.css";

const Menuitems = (props) => {
  return (
    <div className={Style.menuItem}>
      <img src={FaClose} onClick={props.onClick} />
      <p>Blog</p>
      <p>Contact us</p>
      <p>Sign In</p>
    </div>
  );
};

export default Menuitems;
