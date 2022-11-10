import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faFileText,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './ProfileBar.module.scss';

const cx = classNames.bind(styles);

function ProfileBar({
  user = {
    username: 'Kiet Nguyen',
    avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
  },
}) {
  const [state, setState] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('account')}>
          <img className={cx('avt')} src={user.avt} alt="" />
          <span className={cx('user-name')}>{user.username}</span>
        </div>
        <div className={cx('content')}>
          <ul className={cx('list-active')}>
            <li
              className={cx('active-item', 'sub-item')}
              style={{ height: state ? '14rem' : '3rem' }}
            >
              <FontAwesomeIcon
                icon={faAddressCard}
                className={cx('icon')}
                onClick={() => setState(!state)}
              />
              <div className={cx('account-active')}>
                <span
                  className={cx('active-name')}
                  onClick={() => setState(!state)}
                >
                  Account
                </span>
                <div className={cx('profile-list-active')}>
                  <Link to="/profile">
                    <span className={cx('active-name', 'active-sub')}>
                      Profile
                    </span>
                  </Link>
                  <Link to="/address">
                    <span className={cx('active-name', 'active-sub')}>
                      Address
                    </span>
                  </Link>
                  <Link to="/change-password">
                    <span className={cx('active-name', 'active-sub')}>
                      Change Password
                    </span>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link to="/history-order" className={cx('active-item')}>
                <FontAwesomeIcon icon={faFileText} className={cx('icon')} />
                <span className={cx('active-name')}>History Order</span>
              </Link>
            </li>
            <li>
              <Link to="/notify" className={cx('active-item')}>
                <FontAwesomeIcon icon={faMessage} className={cx('icon')} />
                <span className={cx('active-name')}>Notify</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;
