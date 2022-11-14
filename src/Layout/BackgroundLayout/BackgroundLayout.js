import classNames from 'classnames/bind';
import styles from './BackgroundLayout.module.scss';
import logo from '~/commons/assets/logo.png';

const cx = classNames.bind(styles);
function BackgroundLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('background')}></div>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <a href="/">
            <img src={logo} alt="" className={cx('logo')} />
          </a>
          {children}
        </div>
      </div>
    </div>
  );
}

export default BackgroundLayout;
