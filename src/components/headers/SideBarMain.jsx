import React from "react";
import SidebarComponent from "./SidebarComponent";
import CodeBox from "../../components/common/CodeBox";

const SideBarMain = () => {
  return (
    <>
      <div className="content-container">
        <h1 className="header">Sidebars</h1>
        <p className="text">Responsive sidebar</p>
        <ul>
          <li>react-responsive</li>
          <li>react-icons</li>
        </ul>
        <div className="install-box">
          npm install react-responsive react-icons
        </div>

        <div className="sidebar-codebox-container">
          <CodeBox
            code={`import React, { useState, useEffect } from "react";
            import { useMediaQuery } from "react-responsive";
            import Link from "next/link";
            import { useRouter } from "next/router";
            import { IoMenuSharp } from "react-icons/io5";            
            const SideBar = () => {
              const [activate, setActivate] = useState();
              const [activate2, setActivate2] = useState();
              const [activate3, setActivate3] = useState();
              const [activate4, setActivate4] = useState();
              const [activate5, setActivate5] = useState();
              const [activateSnippets, setActivateSnippets] = useState();
              const [activateAnimate, setActivateAnimate] = useState();
              const [activateHeader, setActivateHeader] = useState();
              const [activateFooter, setActivateFooter] = useState();
              const router = useRouter();
              const isMobile = useMediaQuery({ query: \`(max-width: 1000px)\` });
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
                if (router.pathname === "/#") {
                  setActivate("tab-active");
                } else if (router.pathname === "/about") {
                  setActivate2("tab-active");
                } else if (router.pathname === "/#") {
                  setActivate3("tab-active");
                } else if (router.pathname === "/#") {
                  setActivate4("tab-active");
                } else if (router.pathname === "/#") {
                  setActivate5("tab-active");
                } else if (router.pathname === "/#") {
                  setActivateSnippets("tab-active");
                } else if (router.pathname === "/#") {
                  setActivateAnimate("tab-active");
                } else if (router.pathname === "/#") {
                  setActivateHeader("tab-active");
                } else if (router.pathname === "/#") {
                  setActivateFooter("tab-active");
                }
              }, []);
              return (
                <>{isMobile && (<div onClick={openSidebarHandler} className="menu-icon-container"><IoMenuSharp style={{ fontSize: "1.5rem" }} /></div>)}{openSidebar && isMobile && (
                    <div
                      onClick={openSidebarHandler}
                      className="menu-invisible-container"
                    ></div>
                  )}<div className={\`container $\{container}\`}><Link href="/"><p className={\`logo\`}>??????</p></Link><input className="input" placeholder="Search" /><h4 className="section-header">Header</h4><Link href="/about"><p className={\`section-tab $\{activate}\`}>About</p></Link><Link href="/"><p className={\`section-tab $\{activate2}\`}>Work</p></Link><Link href="/layout/columns2layout"><p className={\`section-tab $\{activate3}\`}>News</p></Link><Link href="/"><p className={\`section-tab $\{activate4}\`}>Testing</p></Link><h4 className="section-header">Build</h4><Link href="/"><p className={\`section-tab $\{activate5}\`}>House</p></Link><Link href="/"><p className={\`section-tab $\{activateHeader}\`}>Mall</p></Link>
                    <Link href="/"><p className={\`section-tab $\{activateFooter}\`}>Apartment</p></Link><h4 className="section-header">Color</h4><Link href="/"><p className={\`section-tab $\{activateAnimate}\`}>Green</p></Link><h4 className="section-header">Support</h4><Link href=""><p className={\`section-tab $\{activateSnippets}\`}>Helpdesk</p></Link></div><style jsx>{\`
                      .container {
                        grid-area: sideBar;
                        background: #333;
                        padding: 1rem;
                        transform: $\{isMobile && "translateX(-15rem)"};
                        z-index: 1500;
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
                        background: #58ccd6;
                        width: 3rem;
                        height: 3rem;
                        z-index: 1500;
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
                        content: "???? ";
                        position: absolute;
                        left: 0;
                        background: #58ccd6;
                        color: #58ccd6;
                      }
            
                       {
                        /* .tab-active {
                        background: #58ccd6;
                        width: 90%;e
                      } */
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
                    \`}</style></>
              );
            };
            
            export default SideBar;
            
`}
          />
          <div className="sidebar-container">
            <SidebarComponent />
          </div>
        </div>
      </div>
      <style jsx>{`
        .sidebar-codebox-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .sidebar-container {
          width: 12rem;
        }
      `}</style>
    </>
  );
};

export default SideBarMain;
