import { useState, useEffect } from 'react';
import Input from '~/components/Input';
import * as orderAPI from '~/api/orderApi';
import ListOrder from '~/Layout/components/ListOrder';
import classNames from 'classnames/bind';
import styles from './OrderHistory.module.scss';

const cx = classNames.bind(styles);

function OrderHistoryComponent() {
  const [listOrder, setListOrder] = useState([]);
  const getListOrder = async () => {
    const result = await orderAPI.getOrder();
    console.log(result);
    setListOrder(result);
  };
  useEffect(() => {
    getListOrder();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('menu')}>
          <ul className={cx('list-option')}>
            <li className={cx('option')}>All</li>
            <li className={cx('option')}>Confirming</li>
            <li className={cx('option')}>Picking up</li>
            <li className={cx('option')}>Delivering</li>
            <li className={cx('option')}>Delivered</li>
            <li className={cx('option')}>Cancelled</li>
            <li className={cx('option')}>Return/Refund</li>
          </ul>
        </div>
        <div className={cx('search')}>
          <form>
            <Input
              placeholder={cx('Search with ID order, product')}
              type="text"
              className={cx('input-search')}
            />
          </form>
        </div>
        <div className={cx('content')}>
          <ListOrder listOrder={listOrder} />
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryComponent;
