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

  const payment = (key) => {
    switch (key) {
      case 'ONLINE_PAYMENT_MOMO':
        return 'MOMO';
      case 'ONLINE_PAYMENT_PAYPAL':
        return 'PAYPAL';
      default:
        return 'COD';
    }
  };

  const status = (key) => {
    switch (key) {
      case 'WAIT_FOR_PAYMENT':
        return 'Paying';
      case 'WAIT_FOR_CONFIRM':
        return 'Confirming';
      case 'WAIT_FOR_SEND':
        return 'Sending';
      case 'DELIVERING':
        return 'Delivering';
      case 'DELIVERED':
        return 'Delivered';
      case 'COMPLETED':
        return 'Completed';
      default:
        return 'Cancel';
    }
  };

  const [state, setState] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('top')}>
          <div className={cx('code')}>
            <FontAwesomeIcon className={cx('icon')} icon={faFile} />
            <span className={cx('id-order')}>Order: {item.id} </span>
            <span className={cx('date-order')}>
              {'(' + item.createTime + ')'}
            </span>
          </div>
          <span className={cx('status')}>{status(item.status)}</span>
        </div>

        <div
          className={cx('content')}
          style={{ height: state && item.orderDetails.length * 11 + 'rem' }}
        >
          {item.orderDetails.map((product, index) => {
            return (
              <div className={cx('content-order')} key={index}>
                <div className={cx('product')}>
                  <img src={product.productVariation.product.avatar} alt="" />
                </div>
                <div className={cx('product-details')}>
                  <span className={cx('name')}>
                    {product.productVariation.product.name
                      .split(' ')
                      .filter((item, index) => index < 4)
                      .join(' ')}
                  </span>
                  <span className={cx('color')}>
                    {product.productVariation.tier
                      ? product.productVariation.tier
                      : 'Variation'}
                    {':   '}
                    {product.productVariation.variationName}
                  </span>
                  <span className={cx('quantity')}>x{product.quantity}</span>
                </div>
                <div className={cx('product-price')}>
                  <div className={cx('price')}>
                    <span
                      className={
                        product.productVariation.discount > 0
                          ? cx('old-price')
                          : cx('')
                      }
                    >
                      {commas(product.productVariation.price + '')}
                      VND
                    </span>
                    {product.productVariation.discount > 0 && (
                      <span className={cx('sale-price')}>
                        {commas(product.unitPrice * product.quantity + '')} VND
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
          <span className={cx('value')}>{commas(item.payPrice + '')} VND</span>
        </div>
        <div className={cx('bottom')}>
          <div className={cx('sub-detail')}>
            <span>Note: {item.note}</span>
            <span>Payment: {payment(item.paymentMethod)}</span>
          </div>
          <div className={cx('action')}>
            {(status(item.status) === 'Delivered' ||
              status(item.status) === 'Completed') && (
                <Button primary children="Comment" className={cx('btn-order')} />
              )}
            <Button
              primary
              children="Order again"
              className={cx('btn-order')}
            />
            <Button
              outline
              children={state ? 'Close details' : 'More details'}
              className={cx('btn-see')}
              onClick={() => setState(!state)}
              disabled={item.orderDetails.length < 2 && true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
