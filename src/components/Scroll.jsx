import React from "react";
import imgDown from "../images/icon-arrow-down-black.png";

export default function Scroll() {
  let languageCurrent = "en";
  return (
    <div className="scrollTo">
      <span>
        {languageCurrent === "vi" ? "Khám phá thêm" : "Scroll to Discover"}
      </span>
      <img src={imgDown} alt="" />
    </div>
  );
}
