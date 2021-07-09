import React from "react";
import Header from "./Header";
import SectionSlider from "./SectionSlider";
import Quote from "./Quote";
import Box from "./Box";
export default function ContentPage() {
  return (
    <>
      {/* <Header /> */}
      <SectionSlider />
      <Box />
      <Quote text="Chất lượng không chỉ là tiêu chuẩn mà nó còn là thái độ của chúng tôi đối với từng sản phẩm" />
    </>
  );
}
