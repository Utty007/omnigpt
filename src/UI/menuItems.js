import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "../Constants/Image";
import Style from "./menuItem.module.css";

const Menuitems = (props) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-left" className={Style.menuItem}>
      <img src={Image.FaClose} onClick={props.onClick} alt="..." />
      <p>Blog</p>
      <p>Contact us</p>
      <p>Sign In</p>
    </div>
  );
};

export default Menuitems;
