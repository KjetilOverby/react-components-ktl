import React from "react";
import CssClassComponent from "./CssClassComponent";

const CssMain = () => {
  const margin = ["margin: 1rem 0;"];
  const padding = ["margin: 1rem 0;"];
  const marginBottom = ["margin-bottom: 1.5rem;"];
  const marginTop = ["margin-top: 1.5rem;"];
  const paddingBottom = ["padding-bottom: 1.5rem;"];
  const paddingTop = ["padding-top: 1.5rem;"];
  const textMargins = ["margin: 0:"];

  return (
    <>
      <div className="content-container">
        <div>
          <CssClassComponent nameClass="m" styles={margin} />
          <CssClassComponent nameClass="p" styles={padding} />
          <CssClassComponent nameClass="mb" styles={marginBottom} />
          <CssClassComponent nameClass="mt" styles={marginTop} />
          <CssClassComponent nameClass="pb" styles={paddingBottom} />
          <CssClassComponent nameClass="pt" styles={paddingTop} />
          <CssClassComponent
            nameClass="p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6"
            styles={textMargins}
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default CssMain;
