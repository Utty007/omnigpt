import Image from "../../../Constants/Image";
import Style from "./Frame4.module.css";

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
          src={Image.Screenshot}
          data-aos="flip-up"
          data-aos-duration="3000"
          alt="..."
        />
      </div>
    </div>
  );
};

export default Frame4;
