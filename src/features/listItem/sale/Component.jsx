import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sale.module.scss';
import PageProduct from '~/components/Layout/components/PageProduct';

const cx = classNames.bind(styles);

function SaleComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <PageProduct />
      </div>
    </div>
  );
}

export default SaleComponent;
