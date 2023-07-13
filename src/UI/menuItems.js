import FaClose from "../Images/close.png";
import Style from "./menuItem.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Menuitems = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-left" className={Style.menuItem}>
      <img src={FaClose} onClick={props.onClick} />
      <p>Blog</p>
      <p>Contact us</p>
      <p>Sign In</p>
    </div>
  );
};

export default Menuitems;
