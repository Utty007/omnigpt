import Style from "./Frame4.module.css";
import Screenshot from "../../../Images/Screenshot.png";

const Frame4 = () => {
  return (
    <div className={Style.Frame4}>
      <h1 className={Style.mainHeader}>
        <span>Accessible</span> pricing <br /> for all users
      </h1>

      <div>
        <img src={Screenshot} />
      </div>
    </div>
  );
};

export default Frame4;
