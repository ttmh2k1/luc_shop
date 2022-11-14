import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './AddComment.module.scss';

const cx = classNames.bind(styles);

function AddComment({
  productImage = 'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
}) {
  const star = [0, 1, 2, 3, 4];
  const [check, setCheck] = useState(false);
  const [starState, setStarState] = useState(-1);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('rating')}>
            <div className={cx('product')}>
              <img
                src={productImage}
                alt="{styles} "
                className={cx('product-image')}
              />
            </div>
            <div className={cx('star')}>
              {star.map((item) => {
                return (
                  <FontAwesomeIcon
                    key={item}
                    icon={item <= starState ? faStarSolid : faStar}
                    onMouseOver={() => {
                      setCheck(false);
                      setStarState(item);
                    }}
                    onMouseOut={() => {
                      return !check && setStarState(-1);
                    }}
                    onClick={() => setCheck(true)}
                    className={cx('icon-star')}
                  />
                );
              })}
            </div>
          </div>
          <div className={cx('comment')}>
            <div className={cx('write-comment')}>
              <textarea
                className={cx('comment-input')}
                placeholder={'Write comment for this product...'}
              ></textarea>
            </div>
            <div className={cx('post-comment')}>
              <Button primary rounded children={'POST'} className={cx('btn')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
