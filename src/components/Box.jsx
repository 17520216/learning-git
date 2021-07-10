import BoxChapter from "./BoxChapter";
import { Context } from "../context/useContextHome";
import Container from "./Container";
import { useRef, useEffect, useState, useContext } from "react";
import { TweenMax, gsap, TimelineLite } from "gsap";
import banner1 from "../images/banner-01.png";
import { useInView } from "react-intersection-observer";
export default function Box({ title }) {
  let chapter = [
    {
      title: "Web - Responsive",
      caption: "Register",
      money: "$2.000",
      slug: "backend",
    },
    {
      title: "ReactJs",
      caption: "Register",
      money: "$1.500",
      slug: "frontend",
    },
    {
      // dark={true}
      title: "NextJs",
      caption: "Register",
      money: "$800",
      slug: "design",
    },
    {
      slug: "copywriter",
      title: "Copywriter Fresher",
      caption: "Register",
      money: "$500",
    },
    ,
    {
      slug: "UX-UI",
      // dark={true}
      title: "UI/UX Designer",
      caption: "Register",
      money: "$800",
    },
  ];

  const [countAni, setCountAni] = useState(0);
  const listRef = useRef();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  let timeout;

  const animationOn = function () {
    timeout = setTimeout(() => {
      gsap.fromTo(
        listRef.current.children,
        { x: -50 },
        {
          duration: 0.6,
          x: 0,
          autoAlpha: 1,
          stagger: 0.3,
          delay: 1,
        }
      );
    }, 200);
  };

  const animationOff = function () {
    gsap.to(listRef.current.children, {
      // x: 50,
      autoAlpha: 0,
      opacity: 0,
    });
    clearTimeout(timeout);
  };

  useEffect(() => {
    if (inView === true) {
      animationOn();
    } else {
      animationOff();
    }
  }, [inView]);

  let { dark } = useContext(Context);

  return (
    <>
      <div className="sectionChapter">
        <Container>
          {title && <h2 className="other">Other Job Opening</h2>}
          <span ref={ref}></span>
          <div ref={listRef} className="box">
            {chapter.map((e, i) => (
              <BoxChapter dark={dark} key={i} {...e} className="aniImg" />
              // <img src={banner1} alt="" key={i} className="aniImg" />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
