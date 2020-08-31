import React from "react";
import DesktopNav from "./DesktopNav.js";
import MobileNav from "./MobileNav.js";

// import "../less/index.less";

import "antd/dist/antd.css";

const NavBar = () => {
  return (
    <div className="mainNavigation">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default NavBar;
