import React from 'react';
import logo from '../../commons/assets/logo.png';
import Button from '~/components/Button/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './headerTop.scss';
import '../../styles/grid/grid.css';

function HeaderTop({ username }) {
  return (
    <div className="grid wide">
      <div className="header-top row">
        <div className="l-3 logo">
          <img src={logo} alt="" />
        </div>

        <div className="search l-5">
          <form>
            <input placeholder="Search product" />
            <SearchOutlinedIcon className="icon" />
          </form>
        </div>

        <div className="sign-in l-4">
          <ShoppingBagOutlinedIcon className="icon-cart" />
          <PersonOutlineOutlinedIcon className="icon-user" />
          <span>Sign in</span>
          <Button
            text="Sign up"
            borderColor=" #955b36"
            background="#fff"
            color=" #955b36"
            fontSize="1.4rem"
            width="12rem"
            className="btn-sign-up"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
