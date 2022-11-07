import { useState, useRef } from 'react';
import ProductItem from '../ProductItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';

const cx = classNames.bind(styles);

function ListProduct({
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
  ],
}) {
  const [state, setState] = useState(0);
  const productRef = useRef();
  const sourceSize = listProduct.length;
  const doubleProduct = [...listProduct, ...listProduct];

  let productListFormat = [listProduct[state]];
  if (state === 0) {
    productListFormat = [
      listProduct[sourceSize - 1],
      ...productListFormat,
      ...listProduct.slice(state + 1, state + 5),
    ];
  } else if (state === sourceSize - 1) {
    productListFormat = [
      listProduct[state - 1],
      ...productListFormat,
      listProduct[0],
      ...doubleProduct.slice(state + 2, state + 5),
    ];
  } else {
    productListFormat = [
      doubleProduct[state - 1],
      ...productListFormat,
      ...doubleProduct.slice(state + 1, state + 5),
    ];
  }
  console.log(state);
  console.log(productListFormat);

  const handleClickNext = () => {
    productRef.current.style.transition = 'transform 0.5s';
    productRef.current.style.transform = `translateX(-51.55%) translateX(0px)`;
    nextProduct();
  };

  const nextProduct = () => {
    setTimeout(() => {
      setState((prev) => {
        if (prev < sourceSize - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
      productRef.current.style.transition = 'transform 0s';
      productRef.current.style.transform = `translateX(-26%) translateX(0px)`;
    }, 1000);
  };

  const handleClickBack = () => {
    productRef.current.style.transition = 'transform 0.5s';
    productRef.current.style.transform = `translateX(0) translateX(0px)`;
    prevProduct();
  };

  const prevProduct = () => {
    setTimeout(() => {
      setState((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return sourceSize - 1;
        }
      });
      productRef.current.style.transition = 'transform 0s';
      productRef.current.style.transform = `translateX(-25.6%) translateX(0px)`;
    }, 1000);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')} ref={productRef}>
          {productListFormat.map((product, index) => {
            return (
              <div key={index} className={cx('product')}>
                <ProductItem product={product} />
              </div>
            );
          })}
        </div>

        <div className={cx('selection')}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={handleClickBack}
            className={cx('navigate-icon', 'icon-prev')}
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={handleClickNext}
            className={cx('navigate-icon', 'icon-next')}
          />
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
