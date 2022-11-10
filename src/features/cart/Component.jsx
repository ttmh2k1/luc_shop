import React from 'react';
import Select from '~/components/Select';
import Radio from '~/components/Radio';
import Input from '~/components/Input';
import Button from '~/components/Button';
import FormPayment from '~/components/Layout/components/FormPayment';
import ListCartItem from '~/components/Layout/components/ListCartItem';
import Momo from '~/commons/assets/momo.png';
import Paypal from '~/commons/assets/paypal.png';
import COD from '~/commons/assets/cod.png';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function CartComponent() {
  const options = {
    City: [
      { value: 'city', label: 'City' },
      { value: 'ha-noi', label: 'Ha Noi' },
      { value: 'ho-chi-minh', label: 'Ho Chi Minh' },
    ],
    District: [
      { value: 'district', label: 'District' },
      { value: 'q12', label: 'Quan 12' },
      { value: 'thu-duc', label: 'Thu Duc' },
    ],
    Ward: [
      { value: 'ward', label: 'Ward' },
      { value: 'p1', label: 'Phuong 1' },
      { value: 'p2', label: 'Phuong 2' },
    ],
  };

  const shipments = [
    { id: 1, name: 'COD', image: COD },
    { id: 2, name: 'MoMo', image: Momo },
    { id: 3, name: 'Paypal', image: Paypal },
  ];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('form')}>
        <FormPayment title="SHIPPING INFORMATION" height="auto">
          <div>
            <Input
              type="text"
              placeholder="Your name..."
              className={cx('input', 'name-input', 'payment-input')}
            />
            <Input
              type="text"
              placeholder="Your phone..."
              className={cx('input', 'phone-input', 'payment-input')}
            />
          </div>
          <Input
            type="text"
            placeholder="Your email..."
            className={cx('input', 'payment-input')}
          />
          <Input
            type="text"
            placeholder="Your address..."
            className={cx('input', 'payment-input')}
          />
          <div className={cx('select-row')}>
            <Select
              options={options.City}
              className={cx('select', 'payment-slt')}
            />
            <Select
              options={options.District}
              className={cx('select', 'payment-slt')}
            />
            <Select
              options={options.Ward}
              className={cx('select', 'payment-slt')}
            />
          </div>
          <Input
            type="text"
            placeholder="Your note..."
            className={cx('input', 'payment-input')}
          />
          <div className={cx('sub-title')}>PAYMENT METHOD</div>
          <Radio objs={shipments} />
          <Button
            href="/"
            primary
            children="PAY"
            rounded
            className={cx('pay-btn')}
          />
        </FormPayment>
      </div>
      <div className={cx('cart-details')}>
        <ListCartItem />
      </div>
    </div>
  );
}

export default CartComponent;
