import React from 'react';
import logo from '~/commons/assets/logo.png';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import '~/styles/grid/grid.css';
import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop({ username }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <img src={logo} alt="" />
        </div>
        <div className={cx('search')}>
          <form>
            <input placeholder="Search product" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
          </form>
        </div>
        <div className={cx('account')}>
          <FontAwesomeIcon icon={faCartShopping} className={cx('icon-cart')} />
          <Button
            text={true}
            children="SIGN IN"
            className={cx('sign-in')}
          ></Button>
          <Button
            rounded
            primary
            children="SIGN UP"
            className={cx('sign-up')}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
