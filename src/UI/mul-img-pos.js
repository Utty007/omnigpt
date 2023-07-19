import Image from "../Constants/Image";
import Style from "./mulImg.module.css";

const ImgPos = (props) => {
  return (
    <div className={props.className}>
      <div style={{ display: "flex", alignItems: "end" }}>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${Image.bgShape1})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
        >
          <img data-aos="fade-up" data-aos-duration="2000" src={Image.Avatar1} alt="..." />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${Image.ellipse1})`,
            backgroundRepeat: "no-repeat",
            minWidth: "107px",
            minHeight: "107px",
            marginLeft: "27px",
          }}
        >
          <img
            style={{ position: "relative", top: "27px", left: "30px" }}
            src={Image.e1arrow}
            alt="..." />
        </div>
      </div>
      <div className={Style.subParent} style={{ alignItems: "end" }}>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${Image.ellipse2})`,
            backgroundRepeat: "no-repeat",
            width: "107px",
            height: "107px",
            marginRight: "27px",
          }}
        >
          <img
            style={{ position: "relative", top: "27px", left: "30px" }}
            src={Image.e2arrow}
            alt="..." />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${Image.bgShape3})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
            width: "333px",
          }}
        >
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ position: "relative", left: "52px", top: "4px" }}
            src={Image.Avatar3}
            alt="..." />
        </div>
      </div>
      <div
        className={Style.displayNone}
        data-aos="fade-left"
        data-aos-duration="2000"
        style={{
          backgroundImage: `url(${Image.bgShape4})`,
          backgroundRepeat: "no-repeat",
          maxWidth: "467px",
          height: "107px",
          marginTop: "40px",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "18px",
            lineHeight: "25px",
            maxWidth: "253px",
            float: "right",
          }}
        >
          @OmniGPT Can you give us <br alt="..." /> an update on the latest project
          status?
          <span style={{ position: "relative", left: "107px" }}>11: 41</span>
          <span style={{ position: "relative", left: "110px" }}>
            <img src={Image.marked} alt="..." />
          </span>
        </p>
      </div>
      <div className={Style.subParent}>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${Image.bgShape2})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
            position: "relative",
            top: "-150px",
          }}
        >
          <img data-aos="fade-up" data-aos-duration="2000" src={Image.Avatar2} alt="..." />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{
            position: "relative",
            top: "35px",
            left: "10px",
            maxHeight: "110px",
          }}
        >
          <img src={Image.shape1} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default ImgPos;
