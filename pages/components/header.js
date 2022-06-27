import React from "react";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";
import HeaderComponent from "../../src/components/headers/HeaderComponent";

const Header = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <HeaderComponent />
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

export default Header;
