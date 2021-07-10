import React, { useContext } from "react";
import Header from "./Header";
import SectionSlider from "./SectionSlider";
import Quote from "./Quote";
import Box from "./Box";
import { Context } from "../context/useContextHome";
export default function ContentPage() {
  let { dark, lang } = useContext(Context);

  let textEn = "Hello World";
  let textVi = "Chao The Gioi";

  return (
    <main className={`main ${dark ? "dark" : ""}`}>
      {/* <Header /> */}
      <SectionSlider />
      <Box />
      <Quote text={`${lang === "en" ? textEn : textVi}`} />
      <Quote text={`${lang === "en" ? textEn : textVi}`} />
      <Quote text={`${lang === "en" ? textEn : textVi}`} />
      <Quote text={`${lang === "en" ? textEn : textVi}`} />
    </main>
  );
}
