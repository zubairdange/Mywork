import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
export const SSidebar = () => {
  return (
    <ProSidebar>
      <Menu>
        <SubMenu title="UI Technologies">
          <MenuItem>ReactJS</MenuItem>
          <MenuItem>
            JavaScript
            <Menu>
              <SubMenu title="backend Technologies">
                <MenuItem>php</MenuItem>
                <MenuItem>node js</MenuItem>
                <MenuItem>sql</MenuItem>
                <MenuItem>oracle</MenuItem>
              </SubMenu>
            </Menu>
          </MenuItem>
          <MenuItem>CSS</MenuItem>
          <MenuItem>HTML</MenuItem>
        </SubMenu>
      </Menu>

      <Menu align-items=" center">
        <SubMenu title="backend Technologies">
          <MenuItem>php</MenuItem>
          <MenuItem>node js</MenuItem>
          <MenuItem>sql</MenuItem>
          <MenuItem>oracle</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};
