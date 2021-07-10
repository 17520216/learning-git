import React from "react";
import Container from "./Container";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

export default function BannerItem({ img, data }) {
  let refText = useRef();
  let refImg = useRef();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  let timeout;

  const animationOn = function () {
    timeout = setTimeout(() => {
      // TweenMax.set(textRef.current, { x: 0, autoAlpha: 1 }, 1);
      gsap.to(refImg.current, {
        duration: 0.6,
        x: 0,
        autoAlpha: 1,
      });
      gsap.to(refText.current, {
        duration: 0.6,
        x: 0,
        autoAlpha: 1,
      });
    }, 200);
  };

  const animationOff = function () {
    gsap.to(refImg.current, 0.3, { x: 50, autoAlpha: 0 }, 0.1);
    gsap.to(refText.current, 0.3, { x: -50, autoAlpha: 0 }, 0.1);
    clearTimeout(timeout);
  };

  useEffect(() => {
    if (inView === true) {
      animationOn();
    } else {
      animationOff();
    }
  }, [inView]);

  return (
    <>
      <Container>
        <div className="banner">
          <div className="textItem" ref={refText}>
            <span className="viewPoint" ref={ref}></span>
            <p className="subTop aniText">{data?.subTitle}</p>
            {data?.hasTag && (
              <p className="hasTag aniText">
                <span>{data.hasTag}</span>
              </p>
            )}
            <h2 className="aniText">
              {data?.titleLeft ? (
                <span className="titleLeft">{data.titleLeft + " "}</span>
              ) : (
                ""
              )}
              <span>{data?.title2}</span>
            </h2>
            <p className="description aniText">{data?.description}</p>
          </div>

          <img ref={refImg} className="img" src={img} alt="" />
        </div>
      </Container>
      <style jsx>
        {`
          .banner {
            display: flex;
            justify-content: space-between;
          }
          .img {
            max-width: 500px;
            max-height: 500px;
            border-radius: 16px;
          }
        `}
      </style>
    </>
  );
}
