import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountMenu.module.scss';
const cx = classNames.bind(styles);

function AccountMenu({ className }) {
  const classes = cx('wrapper', {
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className={cx('container')}>
        <ul className={cx('content')}>
          <li className={cx('item')}>
            <FontAwesomeIcon icon={faUser} className={cx('icon')} />
            <span className={cx('text')}>Profile</span>
          </li>
          <li className={cx('item')}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className={cx('icon')}
            />
            <span className={cx('text')}>Sign out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountMenu;
