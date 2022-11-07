import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/components/Footer';
import Menu from '~/components/Layout/components/Menu';
import classNames from 'classnames/bind';
import styles from './ProductLayout.module.scss';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header />
      </div>

      <div className={cx('container')}>
        <div className={cx('menu')}>
          <Menu />
        </div>
        <div className={cx('content')}> {children}</div>
      </div>

      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default ProductLayout;
