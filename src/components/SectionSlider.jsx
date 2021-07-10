import { useState, useContext, useEffect } from "react";
import Slider from "react-slick";
import BannerItem from "./BannerItem";
import banner1 from "../images/banner-01.png";
import banner2 from "../images/banner-02.png";
import iconArrow from "../images/icon-arrow-black.png";
import { Context } from "../context/useContextHome";
import Scroll from "./Scroll";
export default function SectionSlider() {
  let listSlideEn = [
    {
      subTop: "EXPERTS SINCE 2013",
      titleLeft: "C.F.D Team",
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
      titleLeft: "C.F.D Team",
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
      titleLeft: "C.F.D Team",
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
  let listSlideVi = [
    {
      subTop: "Thanh lap tu 2020",
      titleLeft: "C.F.D Team",
      titleRight: "La mot cong dong FrontEnd chat luong",
      img: banner1,
      description:
        "Neu ban can tim mot khoa hoc FrontEnd! Hay lien he voi chung toi",
      video: "https://youtu.be/ea-I4sqgVGY",
      href: "",
    },
    {
      subTop: "",
      hasTag: "Ban co biet?",
      titleLeft: "C.F.D Team",
      titleRight: "La mot cong dong FrontEnd chat luong",
      img: banner2,
      description:
        "Neu ban can tim mot khoa hoc FrontEnd! Hay lien he voi chung toi",

      href: "",
      video:
        "https://www.youtube.com/watch?v=_JSangCM9f4&list=RD_JSangCM9f4&start_radio=1",
    },
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  let { dark, lang } = useContext(Context);

  let list = [];

  if (lang === "en") {
    list = listSlideEn;
  } else if (lang === "vi") {
    list = listSlideVi;
  }

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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    beforeChange: (current, next) => setSlideIndex(next),
  };
  return (
    <>
      <section className={`${dark ? "darkS" : ""}`}>
        <Slider {...settings}>
          {list.map((e, i) => (
            <div key={i}>
              <BannerItem {...e} data={e} />
            </div>
          ))}
        </Slider>
        <div className="indexSlide">
          <p>
            <span className="active">{slideIndex + 1}</span>
            <span>/</span>
            <span>{list && list.length}</span>
          </p>
        </div>
        <Scroll />
      </section>
    </>
  );
}
