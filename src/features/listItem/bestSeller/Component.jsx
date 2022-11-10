import React from 'react';
import classNames from 'classnames/bind';
import styles from './BestSeller.module.scss';
import PageProduct from '~/components/Layout/components/PageProduct';

const cx = classNames.bind(styles);

function BestSellerComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <PageProduct />
      </div>
    </div>
  );
}

export default BestSellerComponent;
