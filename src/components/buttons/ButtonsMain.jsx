import React from "react";
import ButtonComponent from "../common/ButtonComponent";
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
        <h2 className="props-header">Standard buttons</h2>
        <div className="btn-container">
          <div>
            <ButtonComponent title="Standard" />
            <p className="text">Type: standard</p>
          </div>
          <div>
            <ButtonComponent title="Standard-outline" type="outline" />
            <p className="text">Type: outline</p>
          </div>
          <div>
            <ButtonComponent title="red" type="red" />
            <p className="text">Type: red</p>
          </div>
          <div>
            <ButtonComponent title="red-outline" type="red-outline" />
            <p className="text">Type: red-outline</p>
          </div>
          <div>
            <ButtonComponent
              title="custom color"
              type="custom-bg"
              bg="#579765"
              bgh="#314b36"
              color="#314b36"
              colorh="#579765"
            />
            <p className="text">Type: custom-bg</p>
            <p className="text">bg: #579765</p>
            <p className="text">color: #314b36</p>
            <p className="text">bgh: #314b36</p>
            <p className="text">colorh: #579765</p>
          </div>
          <div>
            <ButtonComponent
              title="custom outline"
              type="custom-outline"
              bgh="#a399"
              bc="#11a399"
            />
            <p className="text">Type: custom-outline</p>
            <p className="text">bg: #0399</p>
            <p className="text">hover: #314b36</p>
          </div>
        </div>
        <h2 className="props-header">Props</h2>
        <ButtonsTableComponent />
        <div className="code-box">
          <p
            style={{ color: "lightgrey" }}
          >{`import React from \"react\";import Link from \"next/link\";const ButtonComponent = ({title, func, ml, type, link, bg, bgh, color, colorh, bc}) => {return (<>{!link && (<button onClick={func} className={\`container $\{type} \`}>{title}</button>)}{link && (<Link href={\`$\{link}\`}><button className={\`container $\{type} \`}>{title}</button></Link>)}<style jsx>{\`.container {background: dodgerblue;min-width: 10rem;height: 2.5rem;padding: 0.5rem;border: none;border-radius: 5px;color: white;transition: background 0.5s, color 0.5s;text-transform: uppercase;margin: 1rem 1rem 1rem 0;margin-left: $\{ml};grid-area: btn;}.container:hover {background: #1973cc;cursor: pointer;}.outline {border: 1px solid #1973cc;background: transparent;color: #1973cc;}.outline:hover {background: #1973cc47;}.red-outline {border: 1px solid #cc2519;background: transparent;color: #cc2519;}.red-outline:hover {background: #cc25193b;}.red {background: #cc2519;}.red:hover {background: #b11f15;}.custom-bg {background: $\{bg};color: $\{color};}.custom-bg:hover {background: $\{bgh};color: $\{colorh};}.custom-outline {border: 1px solid $\{bc};background: transparent;color: $\{bc};}.custom-outline:hover {background: $\{bgh};}\`}</style></>);};export default ButtonComponent;`}</p>
        </div>
      </div>
      <style jsx>{`
        .btn-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(5rem, 11rem));
          border-top: 1px solid #cacaca;
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
        .props-header {
          font-weight: 300;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default ButtonsMain;
