import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import ProductDetails from '~/components/Layout/components/ProductDetails';
import ListProduct from '~/components/Layout/components/ListProduct';

const cx = classNames.bind(styles);

function ProductDetailsComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <ProductDetails />
        <div className={cx('sub-product')}>
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

export default ProductDetailsComponent;
