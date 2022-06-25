import React from "react";
import TableComponent from "./TableComponent";

const HiddenMain = () => {
  return (
    <>
      <div className="content-container">
        <h1 className="header">Hidden</h1>
        <p className="text">
          Responsively hides children based on the screensize. react-responsive
          needs to be installed.
        </p>

        <div className="html-box">
          <p className="first-tag">{`<Hidden size='small-down'>`}</p>

          <p className="second-tag">
            {`<ContentComponent`} {`/>`}
          </p>

          <p className="first-tag">{`</Hidden>`}</p>
        </div>
        <div className="install-box">
          <p>npm install react-responsive</p>
        </div>
        <h2 className="props-header">Props</h2>
        <TableComponent />
        <div className="code-box">
          <p style={{ color: "white" }}>{`
import React, { useEffect, useState } from \"react\";
import { useMediaQuery } from "react-responsive";

const Hidden = ({ children, size }) => {
  const small = useMediaQuery({ query: \`(min-width: 550px)\` });
  const medium = useMediaQuery({ query: \`(min-width: 1200px)\` });
  const large = useMediaQuery({ query: \`(min-width: 1900px)\` });

  const smallUp = useMediaQuery({ query: \`(max-width: 550px)\` });
  const mediumUp = useMediaQuery({ query: \`(max-width: 1200px)\` });
  const largeUp = useMediaQuery({ query: \`(max-width: 1900px)\` });

  const [sizeDetect, setSizeDetect] = useState(small);

  useEffect(() => {
    if (size === \"small-down\") {
      setSizeDetect(small);
    } else if (size === \"medium-down\") {
      setSizeDetect(medium);
    } else if (size === \"large-down\") {
      setSizeDetect(large);
    } else if (size === \"small-up\") {
      setSizeDetect(smallUp);
    } else if (size === \"medium-up\") {
      setSizeDetect(mediumUp);
    } else if (size === \"large-up\") {
      setSizeDetect(largeUp);
    }
  });

  return (
    <>
      <div className=\"container\">{sizeDetect && children}</div>

      <style jsx>{\`
        .container {
        }
      \`}</style>
    </>
  );
};

export default Hidden;

`}</p>
        </div>
      </div>
      <style jsx>
        {`
          .code-box {
            background: #333;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            color: white;
            width: 45rem;
            height: auto;
            overflow: scroll;
            border-radius: 5px;
            margin-top: 3rem;
          }

          .props-header {
            margin: 3rem 0;
            font-weight: 300;
          }
          .html-box {
            margin: 2rem 0;
          }
          .install-box {
            background: #333;
            display: inline-block;
            padding: 0.5rem;
            color: #fff;
          }
          .first-tag {
            color: dodgerblue;
          }
          .second-tag {
            color: dodgerblue;
            margin-left: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default HiddenMain;
