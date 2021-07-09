import { useState } from "react";
import Slider from "react-slick";
import BannerItem from "./BannerItem";
import banner1 from "../images/banner-01.png";
import banner2 from "../images/banner-02.png";
import iconArrow from "../images/icon-arrow-black.png";
import Scroll from "./Scroll";
export default function SectionSlider() {
  let listSlide = [
    {
      subTop: "EXPERTS SINCE 2013",
      titleLeft: "T.O.P Group",
      titleRight:
        "is a digital agency for sleek technology and kick-ass design.",
      img: banner1,
      description:
        "Looking for problem solvers? Let us know, we love challenging tasks!",
      video: "https://youtu.be/ea-I4sqgVGY",
      href: "",
    },
    {
      subTop: "",
      hasTag: "Do you know?",
      titleLeft: "T.O.P Group",
      titleRight:
        "is a digital agency for sleek technology and kick-ass design.",
      img: banner2,
      description:
        "Looking for problem solvers? Let us know, we love challenging tasks!",
      href: "",
      video:
        "https://www.youtube.com/watch?v=_JSangCM9f4&list=RD_JSangCM9f4&start_radio=1",
    },
    {
      subTop: "",
      hasTag: "Do you know?",
      titleLeft: "T.O.P Group",
      titleRight:
        "is a digital agency for sleek technology and kick-ass design.",
      img: banner2,
      description:
        "Looking for problem solvers? Let us know, we love challenging tasks!",
      href: "",
      video:
        "https://www.youtube.com/watch?v=_JSangCM9f4&list=RD_JSangCM9f4&start_radio=1",
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  function Next({ onClick }) {
    return (
      <div className="arrow" style={{ display: "block" }} onClick={onClick}>
        <img src={iconArrow} alt="" />
      </div>
    );
  }

  function Prev(props) {
    const { style, onClick } = props;
    return (
      <div
        className="arrow -prev"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img src={iconArrow} alt="" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    beforeChange: (current, next) => setSlideIndex(next),
  };
  return (
    <>
      <section>
        <Slider {...settings}>
          {listSlide.map((e, i) => (
            <div key={i}>
              <BannerItem {...e} data={e} />
            </div>
          ))}
        </Slider>
        <div className="indexSlide">
          <p>
            <span className="active">{slideIndex + 1}</span>
            <span>/</span>
            <span>{listSlide && listSlide.length}</span>
          </p>
        </div>
        <Scroll />
      </section>
    </>
  );
}
