import React from "react";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";
import MarginLayoutMain from "../../src/components/marginlayout/MarginLayoutMain";

const marginlayout = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <MarginLayoutMain />
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

export default marginlayout;
