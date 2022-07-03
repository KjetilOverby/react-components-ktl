import React from "react";
import CodeBox from "../common/CodeBox";

const SnippetsMain = () => {
  return (
    <>
      <div className="content-container">
        <h1 className="header">VS-Code Snippets</h1>
        <p className="text">Make your own snippets in VS-code.</p>
        <p className="text">{`Go to: Code -\> Preferences -\> User Snippets`}</p>
        <p className="text">Choose New Global Snippets File</p>

        <br />
        <p className="text mb">Get filename as componentname: </p>

        <div className="install-box">
          <p>{`\${TM_FILENAME_BASE/[\\\\.]//}`}</p>
        </div>
        <h2 className="text snippet-header">Next JS snippets</h2>
        <CodeBox
          code={`
          
          {
            \"Print to console\": {
              \"prefix": "rafcenext\",
              \"body\": [
                \"import React from \'react\'\",
          
                \"\",
          
                \"\",
          
                \"const \${TM_FILENAME_BASE/[\\\\.]//} = () => {",
          
                \"return (\",
                \"<>\",
                \"<div className=\'container\'>\",
                \"\",
                \"</div>\",
                \"<style jsx>{\`\",
                \".container {\",
                \"}\",
                \"\`}\",
                \"</style>\",
                \"</>\",
                \")\",
                \"}\",
                \"\",
                \"export default \${TM_FILENAME_BASE/[\\\\.]//}\"
              ],
              \"description": \"Next js\"
            }
          }
        `}
        />
      </div>
      <style jsx>{`
        .snippet-header {
          font-weight: 300;
          margin-top: 5rem;
        }
        @media screen and (max-width: 650px) {
          .code-box {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default SnippetsMain;
