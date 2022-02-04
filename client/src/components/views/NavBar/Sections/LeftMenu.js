import React from 'react';
import { Menu } from 'antd';
//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    {/* <Menu.Item key="mail" className="menuclass1">
      <a href="/">Home</a>
    </Menu.Item> */}
    <Menu.Item key="mail1" className="menuclass1">
      <a href="/esgrating">ESG Rating</a>
    </Menu.Item>
    <Menu.Item key="mail2" className="menuclass2">
      <a href="/rating">ESGP Rating</a>
    </Menu.Item>
    <Menu.Item key="mail3" className="menuclass3">
      <a href="/recommend">ESGP Recommendation</a>
    </Menu.Item>
    <Menu.Item key="mail4" className="menuclass4">
      <a href="/report">ESGP Report</a>
    </Menu.Item>
    {/* <SubMenu title={<span>Blogs</span>}>
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu> */}
  </Menu>
  )
}

export default LeftMenu