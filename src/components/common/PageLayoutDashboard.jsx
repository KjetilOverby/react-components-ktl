import React from "react";

const PageLayoutDashboard = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 15rem 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "sideMenu content";
            min-height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default PageLayoutDashboard;
