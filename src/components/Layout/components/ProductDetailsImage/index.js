import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetailsImage.module.scss';

const cx = classNames.bind(styles);

function ProductDetailsImage({
  listImages = [
    'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_600x.png?v=1640577488',
    'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-card-retro-nau-d-m-wallet-leonardo-29603794518191_600x.png?v=1622190301',
    'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec03_600x.png?v=1640577488',
    'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec04_600x.png?v=1640577488',
  ],
}) {
  const [state, setState] = useState(0);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('sub-image')}>
            {listImages.map((image, index) => {
              return (
                <img
                  onMouseOver={() => {
                    setState(index);
                  }}
                  key={index}
                  src={image}
                  alt=""
                  className={cx('sub-image-item')}
                />
              );
            })}
          </div>
          <div className={cx('thumbnail')}>
            <img
              src={listImages[state]}
              alt=""
              className={cx('thumbnail-image')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsImage;
