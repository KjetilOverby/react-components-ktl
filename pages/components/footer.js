import React from "react";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";
import FooterMain from "../../src/components/footers/FooterMain";

const footer = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <FooterMain />
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

export default footer;
