import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';

const cx = classNames.bind(styles);
function CartItem({ product = {} }) {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };

  const [quantity, setQuantity] = useState(product.quantity);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('image')}>
          <img src={product.thumbnail} alt="" />
          <div className={cx('count')}>
            <span>{quantity}</span>
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('name')}>{product.name}</div>
          <div className={cx('color')}>
            <span className={cx('title-color')}>Color</span>
            <div
              className={cx('color-circle')}
              style={{ backgroundColor: product.color.hex }}
            ></div>
          </div>
          <div className={cx('quantity')}>
            <div className={cx('quantity-btn')}>
              <button
                className={cx('btn', 'btn-left')}
                onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
              >
                {'-'}
              </button>
              <span>{quantity}</span>
              <button
                className={cx('btn', 'btn-right')}
                onClick={() =>
                  setQuantity(
                    quantity < product.amount ? quantity + 1 : product.amount,
                  )
                }
              >
                {'+'}
              </button>
            </div>
          </div>
        </div>

        <div className={cx('price')}>
          <span className={product.onSale ? cx('old-price') : cx('')}>
            {commas(product.price + '')} VND
          </span>
          {product.salePrice && (
            <span className={cx('sale-price')}>
              {commas(product.salePrice + '')} VND
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
