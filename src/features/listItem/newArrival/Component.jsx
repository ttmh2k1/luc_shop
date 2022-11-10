import React from 'react';
import classNames from 'classnames/bind';
import styles from './NewArrival.module.scss';
import PageProduct from '~/components/Layout/components/PageProduct';

const cx = classNames.bind(styles);

function NewArrivalComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <PageProduct />
      </div>
    </div>
  );
}

export default NewArrivalComponent;
