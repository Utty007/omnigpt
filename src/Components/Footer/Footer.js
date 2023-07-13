import Style from "./Footer.module.css";
import OmniGPTlogo from "../../Images/omnigptLogo.png";

const Footer = () => {
  return (
    <div className={Style.Footer} data-aos="fade-up">
      <div className={Style.footerForm}>
        <div data-aos="fade-right">
          <h1 className={Style.header}>
            Experience the OmniGPT <br /> Difference Today
          </h1>
          <p className={Style.detail}>
            Sign up for a 15-Day Free Trial <br /> and Transform the Way You
            Collaborate.
          </p>
        </div>
        <div data-aos="fade-left">
          <button className={Style.btn}>Start your free trial!</button>
        </div>
      </div>
      <div className={Style.mainFooter}>
        <div>
          <img src={OmniGPTlogo} />
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
          <h3>Lorem Ipsum</h3>
          <h3>Lorem Ipsum</h3>
          <h3>Lorem Ipsum</h3>
          <h3>Lorem Ipsum</h3>
        </div>
        <div>
          <h3 style={{ color: "#05E283", fontWeight: "600" }}>
            Lorem Ipsum Dolor
          </h3>
          <h3>Lorem Ipsum</h3>
          <h3>Lorem Ipsum</h3>
          <h3>Lorem Ipsum</h3>
          <h3>Lorem Ipsum</h3>
        </div>
        <div>
          <h3>Lorem Ipsum</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
