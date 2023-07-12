import yellowStar from "../../../Images/yellowStar.png";
import purpleStar from "../../../Images/purpleStar.png";
import rating from "../../../Images/Rate.png";
import Style from "./Frame6.module.css";
import Slider from "react-slick";
import authorImage from "../../../Images/authorImage.png";
import authorImage2 from "../../../Images/authorImage(2).png";
import TestimonialSlider from "./TestimonialSlider";

const Frame6 = () => {
  const testimony = [
    {
      star: rating,
      authorName: "Luke John",
      testimonyHeader:
        "OmniGPT has completely transformed the way my team works together.",
      testimony:
        "With the ability to seamlessly communicate across multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency",
      authorImage: authorImage,
    },
    {
      star: rating,
      authorName: "Luke John",
      testimonyHeader:
        "OmniGPT has completely transformed the way my team works together.",
      testimony:
        "I was skeptical about using an AI-powered chat tool, but Omnigpt has completely changed my mind. It's like having a virtual assistant that's always available to manage my conversations and keep me organized. I don't know how I managed without it!",
      authorImage: authorImage2,
    },
    {
      star: rating,
      authorName: "Luke John",
      testimonyHeader:
        "OmniGPT has completely transformed the way my team works together.",
      testimony:
        "With the ability to seamlessly communicate across multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency",
      authorImage: authorImage,
    },
    {
      star: rating,
      authorName: "Luke John",
      testimonyHeader:
        "OmniGPT has completely transformed the way my team works together.",
      testimony:
        "I was skeptical about using an AI-powered chat tool, but Omnigpt has completely changed my mind. It's like having a virtual assistant that's always available to manage my conversations and keep me organized. I don't know how I managed without it!",
      authorImage: authorImage2,
    },
    {
      star: rating,
      authorName: "Luke John",
      testimonyHeader:
        "OmniGPT has completely transformed the way my team works together.",
      testimony:
        "With the ability to seamlessly communicate across multiple channels, we are able to collaborate in real-time and make decisions faster than ever. Plus, the AI-powered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to improve their productivity and efficiency",
      authorImage: authorImage,
    },
    {
      star: rating,
      authorName: "Luke John",
      testimonyHeader:
        "OmniGPT has completely transformed the way my team works together.",
      testimony:
        "I was skeptical about using an AI-powered chat tool, but Omnigpt has completely changed my mind. It's like having a virtual assistant that's always available to manage my conversations and keep me organized. I don't know how I managed without it!",
      authorImage: authorImage2,
    }
  ];

  return (
    <div className={Style.Frame6}>
      <h1 className={Style.mainHeader}>
        <span>
          See What People <br /> Are
        </span>{" "}
        Saying About Us
      </h1>
      <TestimonialSlider testimonials={testimony} />
    </div>
  );
};

export default Frame6;
