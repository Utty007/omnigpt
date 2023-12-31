import Style from "./Frame3.module.css";
import iPhoneDisplay from "../../../Images/apple-iphone-14-pro-max-2022-full.png";
import bgImage from "../../../Images/bgImg.png";
import slackLogo from "../../../Images/Slack.png";
import whatsappLogo from "../../../Images/Whatsapp.png";
import Collaboration from "../../../Images/collaboration.png";
import vector2 from "../../../Images/Rectangle2.png";
import vector from "../../../Images/Rectangle6.png";

const Frame3 = (props) => {
  return (
    <div className={Style.Frame3}>
      <div
        className={Style.phoneDisplay}
        style={{
          backgroundImage: `url(${iPhoneDisplay})`,
        }}
      >
        <img src={bgImage} className={Style.bgImage} data-aos="flip-left" />
        <img src={slackLogo} className={Style.slack} data-aos="fade-left" />
        <img src={vector2} className={Style.vector2} data-aos="fade-right" />
        <img src={vector} className={Style.vector} data-aos="fade-up" />

        <img
          src={whatsappLogo}
          className={Style.whatsapp}
          data-aos="fade-down"
        />
      </div>
      <div
        className={Style.Text}
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <h1>
          The <span>All-in-One</span> solution for conversational AI
        </h1>
        <div className={Style.wBg}>
          <span>
            <h3 className={Style.wBgH3}>Seamless Collaboration</h3>
            <p className={Style.wBgP}>
              Easily collaborate with team members <br /> on projects and ideas
              in real-time, boosting <br /> productivity and teamwork
            </p>
          </span>
          <span className={Style.wBgImg}>
            <img src={Collaboration} />
          </span>
        </div>
        <div className={Style.subText}>
          <h2>Multi-Channel Support</h2>
          <p className={Style.hoverDisplay}>
            Stay connected and communicate effortlessly through popular channels
            like WhatsApp, Slack and Telegram
          </p>
        </div>
        <hr />
        <div className={Style.subText}>
          <h2>Advanced AI Capabilities</h2>
          <p className={Style.hoverDisplay}>
            Leverage the power of Chat GPT-4 technology for intelligent
            suggestions, deep insights, and natural language processing
          </p>
        </div>
        <hr />
        <div className={Style.subText}>
          <h2>Multi-Channel Support</h2>
          <p className={Style.hoverDisplay}>
            Stay connected and communicate effortlessly through popular channels
            like WhatsApp, Slack and Telegram
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
