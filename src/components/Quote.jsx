import React, { useRef, useEffect, useContext } from "react";
import Container from "./Container";
import quote from "../images/quote.png";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { Context } from "../context/useContextHome";

export default function Quote({ text }) {
  const textRef = useRef();

  let { dark } = useContext(Context);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  let timeout;

  const animationOn = function () {
    timeout = setTimeout(() => {
      gsap.to(textRef.current, {
        duration: 0.6,
        y: 0,
        autoAlpha: 1,
      });
    }, 200);
  };

  const animationOff = function () {
    gsap.to(textRef.current, {
      // x: 50,
      autoAlpha: 0,
      y: 50,
    });
    clearTimeout(timeout);
  };

  useEffect(() => {
    console.log("inView", inView);
    if (inView === true) {
      animationOn();
    } else {
      animationOff();
    }
  }, [inView]);

  return (
    <section className={`quote ${dark ? "darkQ" : ""}`}>
      <Container className="custom">
        <span ref={ref}>
          <img src={quote} alt="" />
        </span>
        <p className="text" ref={textRef}>
          {text}
        </p>
      </Container>
    </section>
  );
}
