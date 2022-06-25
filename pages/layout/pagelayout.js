import React from "react";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";
import PageLayoutMain from "../../src/components/pagelayout/PageLayoutMain";

const pagelayout = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <PageLayoutMain />
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

export default pagelayout;
