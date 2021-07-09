import { useState, useEffect, useRef } from "react";
import { gsap, TimelineLite } from "gsap";

import Box from "./Box";
export default function Find() {
  let tl = new TimelineLite();
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  let ref5 = useRef();

  useEffect(() => {
    tl.from(
      [ref1.current, ref2.current, ref3.current, ref4.current, ref5.current],
      { opacity: 0, y: 40, duration: 0.6, delay: 1.3, stagger: 0.3 },
      "<+0.8"
    );
  }, []);

  return (
    <>
      <section className="section">
        <Box ref={ref1} color />
        <Box ref={ref2} />
        <Box ref={ref3} color />
        <Box ref={ref4} />
        <Box ref={ref5} color />
      </section>
    </>
  );
}
