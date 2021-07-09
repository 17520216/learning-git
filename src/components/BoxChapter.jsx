const BoxChapter = ({ title, caption, dark, money, slug }) => {
  return (
    <a href={`/career/${slug}`}>
      <div className={`box-chapter ${dark ? "mode" : ""}`}>
        <h2 className="title">{title}</h2>
        <div className="time">
          <p className="caption">{caption}</p>
          <span className="money"> Upto {money}</span>
        </div>
      </div>
    </a>
  );
};
export default BoxChapter;
