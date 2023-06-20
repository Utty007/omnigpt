import iPhoneUi from "../../../Images/apple-iphone-14-pro-max-2022-medium.png";
import iPhoneDisplayBar from "../../../Images/Iphone-display-bar.png";
import whiteBg from "../../../Images/Chat Background.png";
import aBg from "../../../Images/Rectangle 13089.png";
import backArrow from "../../../Images/backArrow.png";
import callIcon from "../../../Images/callIcons.png";
import chatName from "../../../Images/chatName.png";
import Style from "./Frame2.module.css";
import Vector1 from "../../../Images/Vector4.png";
import Vector2 from "../../../Images/Vector5.png";
import Vector3 from "../../../Images/Vector6.png";

const Frame2 = () => {
  return (
    <div className={Style.Frame2}>
      <div
        className={Style.iPhoneDisplay}
        style={{
          backgroundImage: `url(${iPhoneUi})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={iPhoneDisplayBar} />
        <img src={aBg} className={Style.bg} />
        <img src={whiteBg} className={Style.bg} />
        <div
          style={{
            position: "relative",
            top: "-420px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "230px",
            margin: "auto",
          }}
        >
          <div>
            <img src={backArrow} />
            <img src={chatName} style={{ marginLeft: "5px" }} />
          </div>
          <div>
            <img src={callIcon} />
          </div>
        </div>
      </div>
      <div className={Style.inputBox}>
        <img src={Vector3} />
        <img src={Vector2} />
        <input
          type="text"
          placeholder="Can you help me find a restaurant nearby?"
        />
        <img src={Vector1} />
      </div>
    </div>
  );
};

export default Frame2;
