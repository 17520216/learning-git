function Container({ children, className, width = "1170px", social }) {
  return (
    <div className={`container ${className} ${social ? "--social" : ""}`}>
      {children}
      <style jsx>{`
        .container {
          max-width: ${width};
          width: 100%;
          padding: 0 20px;
          margin-left: auto;
          margin-right: auto;
          transition: 0.3s;
          &.--social {
            position: relative;
            height: 0px;
          }
        }

        @media only screen and (max-width: 599px) {
        }
      `}</style>
    </div>
  );
}

export default Container;
