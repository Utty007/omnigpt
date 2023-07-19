import Image from "../../../Constants/Image";
import Style from "./Frame2.module.css";

const Frame2 = () => {
  return (
    <div style={{ padding: "0 80px" }}>
      <div data-aos="fade-up" data-aos-duration="3000" className={Style.Frame2}>
        <div
          className={Style.iPhoneDisplay}
          style={{
            backgroundImage: `url(${Image.iPhoneUi})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={Image.iPhoneDisplayBar} alt="..." />
          <img src={Image.aBg} className={Style.bg} alt="..." />
          <img src={Image.whiteBg} className={Style.bg} alt="..." />
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
              <img src={Image.backArrow} alt="..." />
              <img src={Image.chatName} style={{ marginLeft: "5px" }} alt="..." />
            </div>
            <div>
              <img src={Image.callIcon} alt="..." />
            </div>
          </div>
        </div>
        <div className={Style.inputBox}>
          <img src={Image.Vector3} alt="..." />
          <img src={Image.Vector2} alt="..." />
          <input
            type="text"
            placeholder="Can you help me find a restaurant nearby?"
          />
          <img src={Image.Vector1} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
