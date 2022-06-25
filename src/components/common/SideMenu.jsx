import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SideMenu = () => {
  const [activate, setActivate] = useState();
  const [activate2, setActivate2] = useState();
  const [activate3, setActivate3] = useState();
  const [activate4, setActivate4] = useState();
  const [activate5, setActivate5] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/layout/pagelayout") {
      setActivate("tab-active");
    } else if (router.pathname === "/layout/marginlayout") {
      setActivate2("tab-active");
    } else if (router.pathname === "/layout/columns2layout") {
      setActivate3("tab-active");
    } else if (router.pathname === "/layout/hidden") {
      setActivate4("tab-active");
    } else if (router.pathname === "/components/buttons") {
      setActivate5("tab-active");
    }
  }, []);
  return (
    <>
      <div className="container">
        <Link href="/">
          <p className={`logo`}>⎈</p>
        </Link>
        <input className="input" placeholder="Search" />
        <h4 className="section-header">Layout</h4>
        <Link href="/layout/pagelayout">
          <p className={`section-tab ${activate}`}>Pagelayout</p>
        </Link>
        <Link href="/layout/marginlayout">
          <p className={`section-tab ${activate2}`}>Marginlayout</p>
        </Link>
        <Link href="/layout/columns2layout">
          <p className={`section-tab ${activate3}`}>2 columns-layout</p>
        </Link>
        <Link href="/layout/hidden">
          <p className={`section-tab ${activate4}`}>Hidden</p>
        </Link>
        <h4 className="section-header">Components</h4>
        <Link href="/components/buttons">
          <p className={`section-tab ${activate5}`}>Buttons</p>
        </Link>
        <p className="section-tab">Header</p>
        <p className="section-tab">Footer</p>
        <h4 className="section-header">Animations</h4>
        <p className="section-tab">CSS-Animate</p>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: sideMenu;
            background: #333;
            padding: 1rem;
          }
          .input {
            background: transparent;
            outline: none;
            border: 1px solid grey;
            padding: 0.5rem;
            border-radius: 5px;
            font-size: 1.2rem;
            width: 12rem;
            font-weight: 100;
          }
          .logo {
            color: orange;
            font-size: 3rem;
            margin-bottom: 2rem;
          }
          .logo:hover {
            cursor: pointer;
          }
          .section-header {
            color: grey;
            margin: 1rem 0;
          }
          .section-tab {
            color: white;
            margin-left: 1rem;
            margin-bottom: 1.5rem;
            font-weight: 300;
          }
          .section-tab:hover {
            cursor: pointer;
          }
          .tab-active::before {
            content: "😝 ";
          }
        `}
      </style>
    </>
  );
};

export default SideMenu;
