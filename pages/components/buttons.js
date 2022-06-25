import React from "react";
import ButtonsMain from "../../src/components/buttons/ButtonsMain";
import PageLayoutDashboard from "../../src/components/common/PageLayoutDashboard";
import SideMenu from "../../src/components/common/SideMenu";

const Buttons = () => {
  return (
    <>
      <PageLayoutDashboard>
        <SideMenu />
        <ButtonsMain />
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

export default Buttons;
