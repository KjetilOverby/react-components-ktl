import React from "react";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";
import Columns2LayoutMain from "../../src/components/columns2layout/Columns2LayoutMain";

const columns2layout = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <Columns2LayoutMain />
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

export default columns2layout;
