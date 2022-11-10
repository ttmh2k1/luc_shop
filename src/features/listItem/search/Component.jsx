import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import PageProduct from '~/components/Layout/components/PageProduct';

const cx = classNames.bind(styles);

function SearchComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <PageProduct className={cx('content')} />
      </div>
    </div>
  );
}

export default SearchComponent;
