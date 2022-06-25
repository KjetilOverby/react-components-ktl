import React from "react";
import SideMenu from "../../src/components/common/SideMenu";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SnippetsMain from "../../src/components/vscode/SnippetsMain";

const snippets = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <SnippetsMain />
      </PageLayoutDashboard>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default snippets;
