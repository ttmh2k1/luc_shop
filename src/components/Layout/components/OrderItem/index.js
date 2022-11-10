import { useState } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './OderItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function OrderItem({ item }) {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };

  const [state, setState] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('top')}>
          <div className={cx('code')}>
            <FontAwesomeIcon className={cx('icon')} icon={faFile} />
            <span className={cx('id-order')}>{item.id}</span>
          </div>
          <span className={cx('status')}>{item.status}</span>
        </div>

        <div
          className={cx('content')}
          style={{ height: state && item.product.length * 11 + 'rem' }}
        >
          {item.product.map((product, index) => {
            return (
              <div className={cx('content-order')} key={index}>
                <div className={cx('product')}>
                  <img src={product.thumbnail} alt="" />
                </div>
                <div className={cx('product-details')}>
                  <span className={cx('name')}>{product.name}</span>
                  <span className={cx('color')}>
                    Color: {product.color.name}
                  </span>
                  <span className={cx('quantity')}>x{product.quantity}</span>
                </div>
                <div className={cx('product-price')}>
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
          })}
        </div>

        <div className={cx('total')}>
          <span className={cx('label')}>Total:</span>
          <span className={cx('value')}>{commas(item.total + '')} VND</span>
        </div>
        <div className={cx('action')}>
          <Button primary children="Order again" className={cx('btn-order')} />
          <Button
            outline
            children={state ? 'Close details' : 'More details'}
            className={cx('btn-see')}
            onClick={() => setState(!state)}
            disabled={item.product.length < 2 && true}
          />
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
