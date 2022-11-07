import React from 'react';
import '../../styles/grid/grid.css';
import ListProduct from '~/components/Layout/components/ListProduct';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function HomeComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('on-sale')}>
            <h1 className={cx('title')}>ON SALE</h1>
            <ListProduct />
          </div>
          <div className={cx('best-seller')}>
            <h1 className={cx('title')}>BEST SELLER</h1>
            <ListProduct />
          </div>
          <div className={cx('new-arrival')}>
            <h1 className={cx('title')}>NEW ARRIVAL</h1>
            <ListProduct />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
