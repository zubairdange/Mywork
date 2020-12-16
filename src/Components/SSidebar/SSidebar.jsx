import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
export const SSidebar = () => {
  return (
    <ProSidebar>
      <Menu>
        <SubMenu title="UI Technologies">
          <MenuItem>ReactJS</MenuItem>
          <MenuItem>JavaScript</MenuItem>
          <MenuItem>CSS</MenuItem>
          <MenuItem>HTML</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};
