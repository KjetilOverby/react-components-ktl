import React from "react";
import CodeBox from "../common/CodeBox";

const SnippetsMain = () => {
  return (
    <>
      <div className="content-container">
        <h1 className="header">VS-Code Snippets</h1>
        <p>Make your own snippets in VS-code.</p>
        <p>{`Go to: Code -\> Preferences -\> User Snippets`}</p>
        <p>Choose programmingformat, for instance JSON</p>
        <h2 className="snippet-header">Next JS snippets</h2>
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
