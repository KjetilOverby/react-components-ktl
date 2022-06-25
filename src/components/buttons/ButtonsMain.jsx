import React from "react";
import ButtonsTableComponent from "./ButtonsTableComponents";

const ButtonsMain = () => {
  return (
    <>
      <div className="content-container">
        <h1 className="header">Buttons</h1>
        <p>
          Copy the button component and get buttons in your app fast and easy.
        </p>
        <div>
          <p style={{ marginTop: "2rem" }}>
            <span className="span-tag"> {`<ButtonComponent`}</span>
          </p>
          <p>
            <span className="span-inline-tag">
              {" "}
              {`type=`}
              <span className="span-inline-descritption">{`'outline'`}</span>
            </span>
          </p>
          <p>
            <span className="span-inline-tag">
              {" "}
              {`title=`}
              <span className="span-inline-descritption">{`'home'`}</span>
            </span>
          </p>
          <p>
            <span className="span-inline-tag">
              {" "}
              {`func=`}
              <span className="span-inline-descritption">
                <span style={{ color: "purple" }}>{`{`}</span>
                <span style={{ color: "orange" }}>function</span>
                <span style={{ color: "purple" }}>{`}`}</span>
              </span>
            </span>
          </p>
          <p>
            <span className="span-inline-tag">
              {" "}
              {`link=`}
              <span className="span-inline-descritption">{`'/home'`}</span>
            </span>
          </p>
          <p style={{ marginBottom: "2rem" }}>
            <span className="span-tag"> {`/>`}</span>
          </p>
        </div>
        <h2 className="props-header">Props</h2>
        <ButtonsTableComponent />
      </div>
      <style jsx>{`
        .span-inline-descritption {
          color: green;
        }
        .span-inline-tag {
          margin-left: 2rem;
          color: red;
        }
        .span-tag {
          color: blue;
        }
        .props-header {
          font-weight: 300;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
};

export default ButtonsMain;
