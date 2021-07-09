import React from "react";
import Container from "./Container";

export default function BannerItem({ img, data }) {
  return (
    <>
      <Container>
        <div className="banner">
          <div className="textItem">
            <span className="viewPoint"></span>
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

          <img className="img" src={img} alt="" />
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
