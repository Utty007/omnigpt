import Slider from "react-slick";
import Testimonial from "../../../UI/Testimonial";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = ({ testimonials }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dots, setDots] = useState(true);
  const [autoPlaySpeed, setAutoPlaySpeed] = useState(3000);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default number of slides to show

  useEffect(() => {
    setActiveSlide(0);
    updateSlidesToShow(); // Call the function to update the number of slides initially and on window resize
    window.addEventListener("resize", updateSlidesToShow);
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [testimonials]);

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setSlidesToShow(3); // Show 3 slides on screens wider than 1024px
      setDots(true);
    } else if (screenWidth >= 768) {
      setSlidesToShow(2); // Show 2 slides on screens wider than 768px
      setDots(true);
    } else {
      setSlidesToShow(1); // Show 1 slide on screens narrower than 768px
      setAutoPlaySpeed(5000);
      setDots(false);
    }
  };

  return (
    <Slider
      slidesToShow={slidesToShow}
      dots={dots}
      arrows={false}
      infinite={true}
      autoplay={true}
      autoplaySpeed={autoPlaySpeed}
      pauseOnHover={true}
    >
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          authorName={testimonial.authorName}
          testimony={testimonial.testimony}
          authorImage={testimonial.authorImage}
          star={testimonial.star}
          testimonyHeader={testimonial.testimonyHeader}
        />
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
