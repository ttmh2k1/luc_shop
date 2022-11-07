import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import ProductDetails from '~/components/Layout/components/ProductDetails';

const cx = classNames.bind(styles);

function ProductDetailsComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <ProductDetails />
      </div>
    </div>
  );
}

export default ProductDetailsComponent;
