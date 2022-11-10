import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import ProfileBar from '~/components/Layout/components/ProfileBar';
import classNames from 'classnames/bind';
import styles from './AccountLayout.module.scss';

const cx = classNames.bind(styles);

function AccountLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header />
      </div>

      <div className={cx('container')}>
        <div className={cx('profile-menu')}>
          <ProfileBar />
        </div>
        <div className={cx('content')}> {children}</div>
      </div>

      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default AccountLayout;
