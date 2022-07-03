import React from "react";

const CssClassComponent = ({ nameClass, styles }) => {
  return (
    <>
      <div className="container">
        <p className="className">{`.${nameClass} {`}</p>
        {styles.map((style) => (
          <p>{style}</p>
        ))}
        <p className="closure">{`}`}</p>
      </div>
      <style jsx>
        {`
          .container {
            margin-bottom: 2rem;
          }
          .className {
            color: blue;
          }
          .closure {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default CssClassComponent;
