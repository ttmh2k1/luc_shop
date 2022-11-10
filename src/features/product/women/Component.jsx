import React from 'react';
import classNames from 'classnames/bind';
import styles from './Women.module.scss';
import PageProduct from '~/components/Layout/components/PageProduct';

const cx = classNames.bind(styles);

function WomenComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <PageProduct />
      </div>
    </div>
  );
}

export default WomenComponent;
