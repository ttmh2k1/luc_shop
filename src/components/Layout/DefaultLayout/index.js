import Header from '~/components/Layout/components/Header';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header />
      </div>

      <div className={cx('container')}>
        <div className={cx('content')}> {children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
