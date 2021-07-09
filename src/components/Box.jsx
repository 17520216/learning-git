import { useEffect, useRef } from "react";
import { gsap, TimelineLite } from "gsap";
import banner from "../img/logo.svg";
import React from "react";
import { useInView } from "react-intersection-observer";

export default React.forwardRef(function Box1(
  { img = banner, text = "Demo Animation", color = false },
  ref
) {
  return (
    <>
      <div className={`animation ${color ? "active" : ""}`} ref={ref}>
        <h2>{text}</h2>
        <img src={img} alt="banner" />
      </div>
    </>
  );
});
