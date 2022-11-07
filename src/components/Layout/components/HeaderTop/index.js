import { useState } from 'react';
import logo from '~/commons/assets/logo.png';
import AccountMenu from '~/components/Layout/components/AccountMenu';
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

function HeaderTop({
  // account = {
  //   username: 'Kiet Nguyen',
  //   avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
  // },
  account,
}) {
  const [state, setState] = useState(false);
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
          {account ? (
            <div
              className={cx('log-in-active')}
              onClick={() => {
                setState(!state);
              }}
            >
              <img src={account.avt} alt="" className={cx('avatar')} />
              <span className={cx('username')}>{account.username}</span>

              <AccountMenu className={state ? cx('menu') : cx('menu-hidden')} />
            </div>
          ) : (
            <div className={cx('log-in')}>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
