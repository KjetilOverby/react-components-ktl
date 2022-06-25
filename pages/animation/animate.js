import React from "react";
import AnimateMain from "../../src/components/animation/AnimateMain";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";

const animate = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <AnimateMain />
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

export default animate;
