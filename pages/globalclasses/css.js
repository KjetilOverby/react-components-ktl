import React from "react";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";
import CssMain from "../../src/components/globalcalsses/CssMain";

const css = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <CssMain />
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

export default css;
