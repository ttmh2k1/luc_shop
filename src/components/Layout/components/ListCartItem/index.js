import { useState } from 'react';
import Button from '~/components/Button';
import CartItem from '../CartItem';
import classNames from 'classnames/bind';
import styles from './ListCartItem.module.scss';
const cx = classNames.bind(styles);

function ListCartItem({
  listItems = [
    {
      name: 'Product Name 1',
      onSale: 15,
      price: 10000000,
      salePrice: 85000,
      quantity: 2,
      amount: 20,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
      color: {
        name: 'Blue',
        hex: '#368495',
      },
      description:
        'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
    },
    {
      name: 'Product Name 2',
      price: 10000000,
      quantity: 5,
      amount: 10,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
      color: {
        name: 'Black',
        hex: '#000',
      },
      description:
        'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
    },
    {
      name: 'Product Name 3',
      price: 10000000,
      quantity: 1,
      amount: 16,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
      color: {
        name: 'Brow',
        hex: '#955b36',
      },
      description:
        'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
    },
    {
      name: 'Product Name 4',
      onSale: 15,
      price: 10000000,
      quantity: 10,
      amount: 14,
      thumbnail:
        'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
      salePrice: 85000,
      color: {
        name: 'Gray',
        hex: '#aaa',
      },
      description:
        'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
    },
  ],
}) {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };

  const [state, setState] = useState(listItems);

  const total = state
    .map((item) => {
      return item.onSale ? item.salePrice : item.price;
    })
    .reduce((acc, item) => acc + item, 0);

  const handleRemoveItem = (key) =>
    setState(state.filter((item, index) => index !== key));
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <span>CART</span>
          <Button
            primary
            rounded
            children={'REMOVE ALL'}
            className={cx('btn')}
            onClick={() => setState([])}
          />
        </div>
        <div className={cx('content')}>
          {state.map((item, index) => {
            return (
              <div className={cx('item')} key={index}>
                <Button
                  text={true}
                  children={'x'}
                  className={cx('btn-delete')}
                  onClick={() => handleRemoveItem(index)}
                />
                <div className={cx('cart-item')}>
                  <CartItem product={item} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={cx('description')}>
          <div className={cx('des-item')}>
            <span className={cx('label')}>Temporary</span>
            <span className={cx('value')}>{commas(total + '')} VND</span>
          </div>
          <div className={cx('des-item')}>
            <span className={cx('label')}>Discount</span>
            <span className={cx('value')}>0.0 VND</span>
          </div>
          <div className={cx('des-item')}>
            <span className={cx('label')}>Delivery Fee</span>
            <span className={cx('value')}>30.000 VND</span>
          </div>
        </div>
        <div className={cx('total')}>
          <span className={cx('label')}>Total</span>
          <span className={cx('value')}>{commas(total + 30000 + '')} VND</span>
        </div>
      </div>
    </div>
  );
}

export default ListCartItem;
