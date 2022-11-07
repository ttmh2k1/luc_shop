import Button from '~/components/Button';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DescriptsProduct.module.scss';

const cx = classNames.bind(styles);

function DescriptsProduct({
  product = {
    name: 'Product Name',
    onSale: 15,
    price: 10000000,
    salePrice: 85000,
    color: [
      {
        name: 'Blue',
        hex: '#368495',
      },
      {
        name: 'Brown',
        hex: '#955B36',
      },
      { name: 'Black', hex: '#000' },
    ],
    description:
      'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
  },
}) {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };

  const [state, setState] = useState(0);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('product')}>
            <div className={cx('product-details')}>
              <span className={cx('product-name')}>{product.name}</span>
              <div className={cx('price')}>
                <span
                  className={
                    product.onSale
                      ? cx('product-old-price')
                      : cx('product-price')
                  }
                >
                  {commas(product.price + '')} VND
                </span>
                {product.salePrice && (
                  <span className={cx('product-sale-price')}>
                    {commas(product.salePrice + '')} VND
                  </span>
                )}
              </div>
            </div>
            <div className={cx('color')}>
              <span className={cx('title-color')}>
                Color: {product.color[state].name}
              </span>
              <div className={cx('select-color')}>
                {product.color.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        state === index
                          ? cx('border-item', 'active')
                          : cx('border-item')
                      }
                      onMouseOver={() => setState(index)}
                    >
                      <div
                        style={{ backgroundColor: color.hex }}
                        className={cx('color-item')}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={cx('description')}>
              <span className={cx('product-description')}>
                {product.description}
              </span>
            </div>
            <div className={cx('action')}>
              <Button primary children={'Add To Cart'} className={cx('btn')} />
              <Button primary children={'Buy Now'} className={cx('btn')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptsProduct;
