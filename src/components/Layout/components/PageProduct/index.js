import classNames from 'classnames/bind';
import styles from './PageProduct.module.scss';
import ProductSession from '../ProductSession';
import { useState } from 'react';

const cx = classNames.bind(styles);

function PageProduct({
  listProduct = [
    {
      name: 'Product 1',
      onSale: 15,
      price: 10000000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 2',
      price: 1000000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 3',
      price: 100000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 4',
      onSale: 10,
      price: 100000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 5',
      onSale: 15,
      price: 10000000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 6',
      price: 1000000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 7',
      price: 100000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 8',
      onSale: 10,
      price: 100000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 9',
      onSale: 15,
      price: 10000000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 10',
      price: 1000000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 11',
      price: 100000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 12',
      onSale: 10,
      price: 100000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 13',
      onSale: 15,
      price: 10000000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 14',
      price: 1000000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 15',
      price: 100000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 16',
      onSale: 10,
      price: 100000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 17',
      onSale: 15,
      price: 10000000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 18',
      price: 1000000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 19',
      price: 100000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 20',
      onSale: 10,
      price: 100000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 21',
      onSale: 15,
      price: 10000000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 22',
      price: 1000000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 23',
      price: 100000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 24',
      onSale: 10,
      price: 100000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 25',
      price: 1000000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 26',
      price: 100000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
    {
      name: 'Product 27',
      onSale: 10,
      price: 100000,
      salePrice: 85000,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
    },
  ],
  className,
}) {
  const [state, setState] = useState(0);
  const PAGE_SIZE = 6;
  const pageCount = listProduct.length / PAGE_SIZE;

  const handleClickNext = () => {
    if (state < pageCount - 1) {
      return setState((prev) => prev + 1);
    } else {
      return setState(0);
    }
  };

  const handleClickBack = () => {
    if (state > 0) {
      return setState((prev) => prev - 1);
    } else {
      return setState(pageCount);
    }
  };

  const classes = cx('content', {
    [className]: className,
  });
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx(classes)}>
          <ProductSession
            listProduct={listProduct.slice(
              state * PAGE_SIZE,
              state * PAGE_SIZE + PAGE_SIZE,
            )}
          />
        </div>
        <div className={cx('pagination')}>
          {state > 0 && (
            <div className={cx('page-btn')}>
              <span className={cx('icon')} onClick={handleClickBack}>
                {'<'}
              </span>
              <span onClick={handleClickBack}>{state}</span>
            </div>
          )}
          <span className={cx('active')}>{state + 1}</span>
          {state < pageCount - 1 && (
            <div className={cx('page-btn')}>
              <span onClick={handleClickNext}>{state + 2}</span>
              <span className={cx('icon')} onClick={handleClickNext}>
                {' '}
                {'>'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PageProduct;
