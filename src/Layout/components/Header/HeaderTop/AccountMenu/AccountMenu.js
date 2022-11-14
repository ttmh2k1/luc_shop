import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout as logoutAction } from '~/ActionCreators/UserCreator';
import cookies from 'react-cookies';

import classNames from 'classnames/bind';
import styles from './AccountMenu.module.scss';
const cx = classNames.bind(styles);

function AccountMenu({ className }) {
  const classes = cx('wrapper', {
    [className]: className,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    cookies.remove('token');
    cookies.remove('user');
    cookies.remove('count');

    dispatch(logoutAction());
    navigate('/login');
  };
  return (
    <div className={classes}>
      <div className={cx('container')}>
        <ul className={cx('content')}>
          <a href="/profile">
            <li className={cx('item')}>
              <FontAwesomeIcon icon={faUser} className={cx('icon')} />

              <span className={cx('text')}>Profile</span>
            </li>
          </a>
          <a href="/">
            <li className={cx('item')}>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className={cx('icon')}
              />
              <span className={cx('text')} onClick={(e) => logout(e)}>
                Sign out
              </span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default AccountMenu;
