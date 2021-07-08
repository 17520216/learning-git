import { useEffect } from "react";
import { gsap } from "gsap";

export default function useAnimation() {
  function animation(refCurrent) {
    gsap.from(refCurrent, { duration: 0.7, y: 50 });
  }
  return animation;
}
