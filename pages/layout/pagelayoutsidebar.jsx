import React from "react";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";
import PagelayoutSidebarMain from "../../src/components/headers/PagelayoutSidebarMain";

const pagelayoutsidebar = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <PagelayoutSidebarMain />
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

export default pagelayoutsidebar;
