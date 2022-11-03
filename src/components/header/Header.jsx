import React from 'react';
import './header.scss';
import '../../styles/grid/grid.css';
import HeaderTop from '../headerTop/HeaderTop';
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <div className="header ">
      <HeaderTop></HeaderTop>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
