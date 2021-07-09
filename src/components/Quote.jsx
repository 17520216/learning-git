import React from "react";
import Container from "./Container";
import quote from "../images/quote.png";

export default function Quote({ text }) {
  return (
    <section className="quote">
      <Container className="custom">
        <span>
          <img src={quote} alt="" />
        </span>
        <p className="text">{text}</p>
      </Container>
    </section>
  );
}
