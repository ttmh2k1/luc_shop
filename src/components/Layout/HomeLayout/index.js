import Header from '~/components/Layout/components/Header';
import Slider from '~/components/Layout/components/SliderBar';
import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header />
      </div>

      <div className={cx('container')}>
        <Slider />
        <div className={cx('content')}> {children}</div>
      </div>
    </div>
  );
}

export default HomeLayout;
