import React from "react";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";
import HiddenMain from "../../src/components/hidden/HiddenMain";

const hidden = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <HiddenMain />
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

export default hidden;
