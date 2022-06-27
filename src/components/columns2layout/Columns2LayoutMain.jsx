import React from "react";
import CodeBox from "../common/CodeBox";

const PageLayoutMain = () => {
  return (
    <>
      <div className="container">
        <div className="text-container">
          <h1 className="header">2 Columns layout</h1>
          <p className="text">
            2 columns layout is a responsive component who change to one column
            when the screen get to mobile size.
          </p>
        </div>
        <div className="html-box">
          <p className="first-tag">{`<MarginLayout>`}</p>

          <p className="second-tag">{`<Column2Layout>`}</p>
          <div className="content-tag">
            <p className="third-tag">{`<p>`}</p>
            <p className="html-text">Lorem</p>
            <p className="third-tag">{`</p>`}</p>
            <p className="third-tag">{`<img src={img} />`}</p>
          </div>

          <p className="second-tag">{`</Column2Layout>`}</p>

          <p className="first-tag">{`</MarginLayout>`}</p>
        </div>
        <div className="illustration-content">
          <div
            style={{
              border: "1px solid lightgray",
              height: "100%",
              width: "90%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <div className="illustration-content-container">
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, quo distinctio fugit odio magni ex debitis dolor
                assumenda inventore quod animi corporis sint sequi accusantium
                cumque aperiam molestiae itaque labore! Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Voluptatum, deleniti
                accusantium ratione eum assumenda, in adipisci blanditiis
                eveniet soluta fuga distinctio! Repudiandae vel, ullam vitae
                nemo debitis perferendis possimus voluptates? Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Dolore, deserunt autem.
                Vel dolores eum in laboriosam perferendis voluptate error dicta
                at aut, ut dignissimos pariatur. At tempora quidem animi dolore.
              </p>
              <img
                style={{ width: "100%" }}
                src="https://www.transitmag.no/wp-content/uploads/2018/07/The_City_London-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <CodeBox
          code={`import React from \"react\";
const Column2Layout = ({ children }) => {
  return (
    <><div className="container">{children}</div><style jsx>{\`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
          }
          @media screen and (max-width: 900px) {
            .container {
              grid-template-columns: 1fr;
            }
          }
        \`}</style></>
  );
};
export default Column2Layout;`}
        />
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
          .first-tag {
            color: red;
          }
          .second-tag {
            color: dodgerblue;
            margin-left: 2rem;
          }
          .third-tag {
            color: dodgerblue;
            margin-left: 4rem;
          }
          .html-text {
            margin-left: 4rem;
            font-style: italic;
            color: gray;
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
          .illustration-content-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0 1rem;
            grid-column-gap: 1rem;
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
          @media screen and (max-width: 650px) {
            .code-box {
              width: 100%;
            }
            .container {
              padding: 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default PageLayoutMain;
