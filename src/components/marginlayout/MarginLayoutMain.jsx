import React from "react";

const MarginLayoutMain = () => {
  return (
    <>
      <div className="container">
        <div className="text-container">
          <h1 className="header">Marginlayout</h1>
          <p className="text">
            Marginlayout responsively change margins as screensize changes.
            Every children components get margins that look nice in all
            screensizes.
          </p>
        </div>
        <div className="html-box">
          <p className="first-tag">{`<MarginLayout>`}</p>

          <p className="second-tag">
            {`<ContentComponent`} {`/>`}
          </p>

          <p className="first-tag">{`</MarginLayout>`}</p>
        </div>
        <div className="illustrationbox">
          <div className="illustration-header">
            <p className="illustration-text">Header</p>
          </div>
          <div className="illustration-content">
            <div
              style={{
                border: "1px solid lightgray",
                height: "100%",
                width: "80%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div
                style={{
                  border: "1px solid lightgray",
                  height: "100%",
                  width: "50%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <p className="illustration-text">Innhold</p>
              </div>
            </div>
          </div>
          <div className="illustration-footer">
            <p className="illustration-text">Footer</p>
          </div>
        </div>
        <div className="code-box">
          <p style={{ color: "white" }}>{`import React from \'react\';

const MarginLayout = ({ children }) => {
  return (
    <><div className=\'container\'>{children}</div>
      <style jsx>{\`
          .container {
            margin: 5rem 35rem;
          }
          @media screen and (max-width: 2100px) {
            .container {
              margin: 5rem 25rem;
             }
          @media screen and (max-width: 1775px) {
            .container {
              margin: 5rem 15rem;
            }
          }
          @media screen and (max-width: 1550px) {
            .container {
              margin: 5rem 10rem;
            }
          }
          @media screen and (max-width: 1265px) {
            .container {
              margin: 5rem 3rem;
            }
          }
          @media screen and (max-width: 800px) {
            .container {
              margin: 5rem .5rem;
            }
          }
         
          }
        \`}</style></>);};

export default MarginLayout;
`}</p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: content;
            padding: 3rem;
          }
          .header {
            font-weight: 300;
            margin-bottom: 3rem;
          }
          .text {
            font-weight: 300;
          }
          .text-container {
            width: 100%;
          }
          .html-box {
            margin: 2rem 0;
          }
          .title {
            font-weight: 100;
            margin: 5rem 0;
            text-align: center;
          }
          .first-box {
            grid-area: first;
          }
          .first-tag {
            color: dodgerblue;
          }
          .second-tag {
            color: dodgerblue;
            margin-left: 2rem;
          }
          .span1 {
            color: orange;
          }
          .span2 {
            color: green;
          }
          .illustrationbox {
            height: 25rem;
            display: grid;
            grid-template-rows: 4rem 1fr 4rem;
            border: 1px solid lightgray;
            grid-area: second;
          }
          .illustration-text {
          }
          .illustration-header {
            background: dodgerblue;
            display: grid;
            place-items: center;
          }
          .illustration-content {
            background: white;
            display: grid;
            place-items: center;
          }
          .illustration-footer {
            background: dodgerblue;
            display: grid;
            place-items: center;
          }
          .code-box {
            background: #333;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            color: white;
            width: 35rem;
            height: auto;
            overflow: scroll;
            border-radius: 5px;
            grid-area: code;
            margin-top: 5rem;
          }
          .code-text {
          }
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
          @media screen and (max-width: 2100px) {
          }
        `}
      </style>
    </>
  );
};

export default MarginLayoutMain;
