import Style from "./Testimonial.module.css";

const Testimonial = (props) => {
  return (
    <div className={Style.Testimonial} data-aos="fade-up">
      <div>
        <img src={props.star} alt="..." />
        <h2 className={Style.header}>{props.testimonyHeader}</h2>
        <p className={Style.testimony}>{props.testimony}</p>
      </div>
      <div className={Style.author}>
        <span>
          <img src={props.authorImage} alt="..." />
        </span>
        <span className={Style.authorName}>
          <p>{props.authorName}</p>
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
