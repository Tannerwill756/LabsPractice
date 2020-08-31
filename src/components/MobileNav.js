import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import logo from "./ecosoapbanklogopng.png";
import { useHistory } from "react-router-dom";

import { Menu } from "antd";

const { SubMenu } = Menu;

const MobileNav = () => {
  const { push } = useHistory();

  return (
    <nav className="mobileNav">
      <div className="mobileLogo">
        <img src={logo} alt="EcoSoapBank logo" />
      </div>
      <div className="mobileMenu">
        <Menu mode="horizontal">
          <SubMenu
            icon={<MenuOutlined style={{ fontSize: "25px" }} />}
            title="Menu"
          >
            <Menu.Item onClick={() => push("/")}>Map</Menu.Item>
            <Menu.Item onClick={() => push("/hubs")}>Hubs</Menu.Item>

            <Menu.Item onClick={() => push("/hotels")}>
              Hotel Partners
            </Menu.Item>
            <Menu.Item onClick={() => push("/manufacturers")}>
              Manufacturing Partners
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </nav>
  );
};

export default MobileNav;
