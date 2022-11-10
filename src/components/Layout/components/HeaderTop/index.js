import { useState } from 'react';
import logo from '~/commons/assets/logo.png';
import AccountMenu from '~/components/Layout/components/AccountMenu';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCartShopping,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import '~/styles/grid/grid.css';
import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop({
  account = {
    username: 'Kiet Nguyen',
    avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
  },
  // account,
}) {
  const [state, setState] = useState(false);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <a href="/" className={cx('logo')}>
          <img src={logo} alt="" />
        </a>
        <div className={cx('search')}>
          <form action="/search" method="">
            <Input
              type="text"
              placeholder="Search product"
              className={cx('input-search')}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
          </form>
        </div>
        <div className={cx('account')}>
          <a href="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              className={cx('icon-cart')}
            />
          </a>
          {account ? (
            <div
              className={cx('log-in-active')}
              onClick={() => {
                setState(!state);
              }}
            >
              <a href="/notify">
                <FontAwesomeIcon icon={faBell} className={cx('icon-bell')} />
              </a>
              <img src={account.avt} alt="" className={cx('avatar')} />
              {/* <span className={cx('username')}>{account.username}</span> */}

              <AccountMenu className={state ? cx('menu') : cx('menu-hidden')} />
            </div>
          ) : (
            <div className={cx('log-in')}>
              <Button
                href="/log-in"
                text={true}
                children="SIGN IN"
                className={cx('sign-in')}
              ></Button>
              <Button
                href="/register"
                rounded
                primary
                children="SIGN UP"
                className={cx('sign-up')}
              ></Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
