import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMenuSharp } from "react-icons/io5";

const SideMenu = () => {
  const [activate, setActivate] = useState();
  const [activate2, setActivate2] = useState();
  const [activate3, setActivate3] = useState();
  const [activate4, setActivate4] = useState();
  const [activate5, setActivate5] = useState();
  const [activateSnippets, setActivateSnippets] = useState();
  const [activateAnimate, setActivateAnimate] = useState();
  const router = useRouter();
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  const [openSidebar, setOpenSidebar] = useState(false);
  const [container, setContainer] = useState();

  const openSidebarHandler = () => {
    setOpenSidebar(!openSidebar);
  };

  useEffect(() => {
    if (openSidebar) {
      setContainer("container-open");
    } else if (!openSidebar) {
      setContainer("container-close");
    }
  }, [openSidebar]);

  useEffect(() => {
    if (!isMobile) {
      setOpenSidebar(true);
    }
  }, [isMobile]);

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
    } else if (router.pathname === "/vscode/snippets") {
      setActivateSnippets("tab-active");
    } else if (router.pathname === "/animation/animate") {
      setActivateAnimate("tab-active");
    }
  }, []);
  return (
    <>
      {isMobile && (
        <div onClick={openSidebarHandler} className="menu-icon-container">
          <IoMenuSharp style={{ fontSize: "1.5rem" }} />
        </div>
      )}
      {openSidebar && isMobile && (
        <div
          onClick={openSidebarHandler}
          className="menu-invisible-container"
        ></div>
      )}
      <div className={`container ${container}`}>
        <Link href="/">
          <p className={`logo`}>㉿</p>
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
        <Link href="/animation/animate">
          <p className={`section-tab ${activateAnimate}`}>CSS-Animate</p>
        </Link>
        <h4 className="section-header">VS-Code</h4>
        <Link href="/vscode/snippets">
          <p className={`section-tab ${activateSnippets}`}>Snippets</p>
        </Link>
      </div>
      <style jsx>
        {`
          .container {
            grid-area: sideMenu;
            background: #333;
            padding: 1rem;
            transform: ${isMobile && "translateX(-15rem)"};
          }
          .container-open {
            animation: openContainer 0.8s forwards;
            position: absolute;
            min-height: 100vh;
          }
          .container-close {
            animation: close 0.8s forwards;
            min-height: 100vh;
            position: absolute;
          }
          .menu-invisible-container {
            position: absolute;
            width: 100vw;
            height: 100vh;
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
            color: #dadada;
          }
          .logo {
            color: #58ccd6;
            font-size: 3rem;
            margin-bottom: 2rem;
          }
          .logo:hover {
            cursor: pointer;
          }
          .menu-icon-container {
            position: fixed;
            right: 2rem;
            top: 2rem;
            background: orange;
            width: 3rem;
            height: 3rem;
            z-index: 1000;
            border-radius: 50%;
            display: grid;
            place-items: center;
          }
          .section-header {
            color: grey;
            margin: 1rem 0;
            font-weight: bold;
          }
          .section-tab {
            color: white;
            margin-left: 1rem;
            margin-bottom: 1.5rem;
            font-weight: 300;
            font-size: 0.9rem;
          }
          .section-tab:hover {
            cursor: pointer;
          }
          .tab-active::before {
            content: "😝 ";
          }
          @keyframes openContainer {
            50% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(0);
            }
          }
          @keyframes close {
            0% {
              transform: translateX(0rem);
            }
            100% {
              transform: translateX(-15rem);
            }
          }
        `}
      </style>
    </>
  );
};

export default SideMenu;
