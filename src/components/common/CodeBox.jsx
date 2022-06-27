import React from "react";

const CodeBox = ({ code }) => {
  return (
    <>
      <div className="code-box">{code}</div>
      <style jsx>
        {`
          .code-box {
            background: linear-gradient(#b890dd, #260c3f);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            color: white;
            width: 45rem;
            max-height: 30rem;
            overflow: scroll;
            border-radius: 5px;
            margin-top: 3rem;
            scrollbar-width: none;
          }
        `}
      </style>
    </>
  );
};

export default CodeBox;
