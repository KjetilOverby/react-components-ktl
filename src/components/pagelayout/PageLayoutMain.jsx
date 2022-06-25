import React from "react";

const PageLayoutMain = () => {
  return (
    <>
      <div className="container">
        <div className="text-container">
          <h1 className="header">Pagelayout</h1>
          <p className="text">
            Pagelayout is very useful when a header and footer is used with
            content in the center. the pagelayout component is using css grid
            areas and children components needs grid-area property. Only three
            children components can be set inside and its grid-area header,
            content and footer. For instance:
          </p>
        </div>
        <div className="html-box">
          <p className="first-tag">{`<PageLayout>`}</p>
          <p className="second-tag">
            {`<HeaderComponent`} <span className="span1">grid-area:</span>{" "}
            <span className="span2">header</span> {`/>`}
          </p>
          <p className="second-tag">
            {`<ContentComponent`} <span className="span1">grid-area:</span>{" "}
            <span className="span2">content</span> {`/>`}
          </p>
          <p className="second-tag">
            {`<FooterComponent`} <span className="span1">grid-area:</span>{" "}
            <span className="span2">footer</span> {`/>`}
          </p>
          <p className="first-tag">{`</PageLayout>`}</p>
        </div>
        <div className="illustrationbox">
          <div className="illustration-header">
            <p className="illustration-text">Header</p>
          </div>
          <div className="illustration-content">
            <p className="illustration-text">Content</p>
          </div>
          <div className="illustration-footer">
            <p className="illustration-text">Footer</p>
          </div>
        </div>
        <div className="code-box">
          <p style={{ color: "white" }}>{`import React from \"react\";

const PageLayout = ({ children }) => {
  return (
    <>
      <div className=\"container\">{children}</div>
      <style jsx>{\`
        .container {
          min-height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 6rem 1fr 15rem;

          grid-template-areas:
            \"header\"
            \"content\"
            \"footer\";
        }
      \`}</style>
    </>
  );
};

export default PageLayout;`}</p>
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
            background: indianred;
            display: grid;
            place-items: center;
          }
          .illustration-content {
            background: white;
            display: grid;
            place-items: center;
          }
          .illustration-footer {
            background: indianred;
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

export default PageLayoutMain;
