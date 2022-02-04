import React, { useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button} from 'antd';
import Icon, { FileExcelFilled } from "@ant-design/icons";
import './Sections/Navbar.css';
import logoimg from "/Users/songlee/Downloads/esg-website-main2/client/src/imgs/green-earth4.png";

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div>
      {/* <img className="finpinLogo" alt="Logo" src={logoimg} href="/" 
      style={{width: 30, height: 30
      }}></img> */}
      </div>
      {/* <div className="menu__logo" style={{display: 'flex', justifyContent: 'center',
      verticalAlign: 'bottom'}}> */}
      <div className="menu__logo">
        <img className="finpinLogo" alt="Logo" src={logoimg} href="/" 
        style={{width: 30, height: 42, display: 'inline-block',
        verticalAlign: 'center', leftMargin: 20}}></img>
        <a href="/" style={{display: 'inline-block'}}>
        Fin&Pin</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar