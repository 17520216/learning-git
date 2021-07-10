import React from "react";
export default React.forwardRef(function BoxChapter(
  { title, caption, dark, money, slug, className },
  ref
) {
  return (
    <a href={`/career/${slug}`} ref={ref} className={className}>
      <div className={`box-chapter ${dark ? "mode" : ""}`}>
        <h2 className="title">{title}</h2>
        <div className="time">
          <p className="caption">{caption}</p>
          <span className="money"> {money}</span>
        </div>
      </div>
    </a>
  );
});
