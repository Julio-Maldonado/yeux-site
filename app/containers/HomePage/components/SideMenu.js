import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { HashLink as Link } from 'react-router-hash-link';

const SideMenu = props => (
  <Menu {...props}>
    <Link smooth to="#home" className="menu-item">
      Home
    </Link>
    <br />
    <Link smooth to="#about" className="menu-item">
      About Us
    </Link>
    <br />
    <Link smooth to="#strategy" className="menu-item">
      Our Strategy
    </Link>
    <br />
    <Link smooth to="#services" className="menu-item">
      Services
    </Link>
    <br />
    <Link smooth to="#pastwork" className="menu-item">
      Past Work
    </Link>
    <br />
    <Link smooth to="#contact" className="menu-item">
      Contact
    </Link>
    <br />
  </Menu>
);

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '20px',
    top: '20px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
    textDecoration: 'none',
    marginBottom: '10px',
    color: '#d1d1d1',
    transition: 'color 0.2s',
  },
  bmItemHover: {
    color: 'white',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

export default SideMenu;
