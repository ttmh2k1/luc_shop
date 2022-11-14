import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from '~/commons/assets/logo.png';
import AccountMenu from './AccountMenu';
import Button from '~/components/Button';
import Input from '~/components/Input';
import DefaultAvatar from '~/commons/assets/default-avt.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCartShopping,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import '~/styles/grid/grid.css';
import * as cartAPI from '~/api/cartApi';
import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(0);

  const countCart = async () => {
    const result = await cartAPI.countCart();
    setCount(result);
  };

  useEffect(() => {
    countCart();
  });

  const account = useSelector((state) => state.user.user);

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
              name="text"
              placeholder="Search product"
              className={cx('input-search')}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon')} />
          </form>
        </div>
        <div className={cx('account')}>
          <a href="/cart" className={cx('cart')}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={cx('icon-cart')}
            />
            {count > 0 && (
              <div className={cx('border')}>
                <span className={cx('count')}> {count}</span>
              </div>
            )}
          </a>
          <a href="/notify">
            <FontAwesomeIcon icon={faBell} className={cx('icon-bell')} />
          </a>
          {account ? (
            <div
              className={cx('log-in-active')}
              onClick={() => {
                setState(!state);
              }}
            >
              <img
                src={account.avatar ? account.avatar : DefaultAvatar}
                alt=""
                className={cx('avatar')}
              />

              <AccountMenu className={state ? cx('menu') : cx('menu-hidden')} />
            </div>
          ) : (
            <div className={cx('log-in')}>
              <Button
                href="/login"
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
