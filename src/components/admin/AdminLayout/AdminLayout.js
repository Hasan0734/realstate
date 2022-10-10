import Head from "next/head";
import React, { useEffect, useState } from "react";
import AdminNav from "../AdminNav/AdminNav";
import AdminSidebar from "../AdminSidebar/AdminSidebar";


const AdminLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setWindowWidth(width);
    });
  }, []);
  return (
    <>
    <Head>
      <title>Admin</title>
      <link rel="stylesheet" href="/css2/bootstrap-extended.css"/>
      <link rel="stylesheet" href="/css2/bootstrap.css"/>
      <link rel="stylesheet" href="/css2/colors.css"/>
      <link rel="stylesheet" href="/css2/components.css"/>
      <link rel="stylesheet" href="/css2/core/menu/menu-types/vertical-menu.css"/>
      
    </Head>
      <div
        className={`pace-done vertical-layout vertical-menu-modern navbar-floating footer-static ${
          windowWidth >= 1200 ? "menu-expanded" : ""
        }  ${toggle ? "menu-open menu-expanded" : " menu-hide"}`}
      >
        <AdminNav toggle={toggle} setToggle={setToggle} />
        <AdminSidebar toggle={toggle} setToggle={setToggle} />

        <div className="app-content content ">
          <div className="content-overlay"></div>
          <div className="header-navbar-shadow"></div>
          <div className="content-wrapper container-xxl p-0">
            {children}
            </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
