import Style from "./Frame4.module.css";
import Screenshot from "../../../Images/Screenshot.png";

const Frame4 = () => {
  return (
    <div className={Style.Frame4}>
      <h1
        className={Style.mainHeader}
        data-aos="fade-up-right"
        data-aos-duration="3000"
      >
        <span>Accessible</span> pricing <br /> for all users
      </h1>

      <div>
        <img
          className={Style.frame4Img}
          src={Screenshot}
          data-aos="flip-up"
          data-aos-duration="3000"
        />
      </div>
    </div>
  );
};

export default Frame4;
