import { NavLink } from "react-router-dom";
import React, { useRef, useEffect } from "react";
import { TimelineLite, gsap } from "gsap";
export default function Header() {
  let headRef = useRef();
  let li1 = useRef();
  let li2 = useRef();
  let li3 = useRef();

  const tl = new TimelineLite();
  useEffect(() => {
    tl.from(headRef.current, { y: -70, duration: 0.7 });
    tl.from(
      [li1.current, li2.current, li3.current],
      { duration: 0.6, x: -50, autoAlpha: 0, stagger: 0.3 },
      "<+0.8"
    );
  }, []);

  return (
    <>
      <div ref={headRef} className="App">
        Learning Js
      </div>

      <nav className="wrap">
        <ul className="tabs">
          <li ref={li1} className="tab-content">
            <NavLink to="/cal">Cal</NavLink>
          </li>
          <li ref={li2} className="tab-content">
            <NavLink to="/sort">Sort</NavLink>
          </li>
          <li ref={li3} className="tab-content">
            <NavLink to="/find">Find</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
