import Avatar1 from "../Images/Avatar1.png";
import Avatar2 from "../Images/Avatar2.png";
import Avatar3 from "../Images/Avatar3.png";
import bgShape1 from "../Images/Rectangle3.png";
import bgShape2 from "../Images/Rectangle4.png";
import bgShape3 from "../Images/Rectangle5.png";
import bgShape4 from "../Images/Rectangle.png";
import ellipse1 from "../Images/Ellipse.png";
import ellipse2 from "../Images/Ellipse2.png";
import e1arrow from "../Images/Vector.png";
import e2arrow from "../Images/Vector2.png";
import marked from "../Images/Shape.png";
import shape1 from "../Images/Rectangle2.png";
import Style from "./mulImg.module.css";

const ImgPos = (props) => {
  return (
    <div className={props.className}>
      <div style={{ display: "flex", alignItems: "end" }}>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${bgShape1})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
        >
          <img data-aos="fade-up" data-aos-duration="2000" src={Avatar1} />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${ellipse1})`,
            backgroundRepeat: "no-repeat",
            minWidth: "107px",
            minHeight: "107px",
            marginLeft: "27px",
          }}
        >
          <img
            style={{ position: "relative", top: "27px", left: "30px" }}
            src={e1arrow}
          />
        </div>
      </div>
      <div className={Style.subParent} style={{ alignItems: "end" }}>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${ellipse2})`,
            backgroundRepeat: "no-repeat",
            width: "107px",
            height: "107px",
            marginRight: "27px",
          }}
        >
          <img
            style={{ position: "relative", top: "27px", left: "30px" }}
            src={e2arrow}
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${bgShape3})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
            width: "333px",
          }}
        >
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            style={{ position: "relative", left: "52px", top: "4px" }}
            src={Avatar3}
          />
        </div>
      </div>
      <div
        className={Style.displayNone}
        data-aos="fade-left"
        data-aos-duration="2000"
        style={{
          backgroundImage: `url(${bgShape4})`,
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
          @OmniGPT Can you give us <br /> an update on the latest project
          status?
          <span style={{ position: "relative", left: "107px" }}>11: 41</span>
          <span style={{ position: "relative", left: "110px" }}>
            <img src={marked} />
          </span>
        </p>
      </div>
      <div className={Style.subParent}>
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          style={{
            backgroundImage: `url(${bgShape2})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
            position: "relative",
            top: "-150px",
          }}
        >
          <img data-aos="fade-up" data-aos-duration="2000" src={Avatar2} />
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
          <img src={shape1} />
        </div>
      </div>
    </div>
  );
};

export default ImgPos;
