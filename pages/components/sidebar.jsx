import React from "react";
import SideMenu from "../../src/components/common/SideMenu";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideBarMain from "../../src/components/headers/SideBarMain";

const Sidebar = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <SideBarMain />
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

export default Sidebar;
