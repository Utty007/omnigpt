import Image from "../../../Constants/Image";
import ImgPos from "../../../UI/mul-img-pos";
import Style from "./Frame1.module.css";

const Frame1 = () => {
  return (
    <div className={Style.Frame1}>
      <div className={Style.Text}>
        <h1>
          Seamless communication <br />{" "}
          <span
            style={{
              backgroundImage: `url(${Image.bgImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            with OmniGPT
          </span>
        </h1>
        <h2>Powered by ChatGPT-4</h2>
        <p>
          Experience the power of AI language models with OmniGPT. Our chat
          platform provides seamless communication across multiple channels.
        </p>
        <p>Try for free! 15-day trial, no credit card required.</p>
        <button>Start your free trial</button>
      </div>
      <ImgPos className={Style.mulImg} />
    </div>
  );
};

export default Frame1;
