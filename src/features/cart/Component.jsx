import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as orderAPI from '~/api/orderApi';
import swal from 'sweetalert';
import Radio from '~/components/Radio';
import Input from '~/components/Input';
import Button from '~/components/Button';
import FormPayment from '~/Layout/components/FormPayment';
import ListCartItem from '~/Layout/components/ListCartItem';
import Momo from '~/commons/assets/momo.png';
import Paypal from '~/commons/assets/paypal.png';
import COD from '~/commons/assets/cod.png';
import * as cartAPI from '~/api/cartApi';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function CartComponent() {
  const user = useSelector((state) => state.user.user);
  const [cartDetails, setCartDetails] = useState([]);
  const [name, setName] = useState(user.fullname);
  const [phone, setPhone] = useState(user.phone ? user.phone : '');
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.defaultAddress);
  const [note, setNote] = useState('');
  const [payment, setPayment] = useState('OFFLINE_CASH_ON_DELIVERY');
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get('success');

  console.log(user);

  const getCart = async () => {
    const result = await cartAPI.getCart();
    setCartDetails(result);
  };

  useEffect(() => {
    if (address) {
      if (user.phoneConfirmed) {
        getCart();
      } else {
        swal("Haven't ever confirm phone", 'Please confirm phone', 'warning');
        navigate('/phone');
      }
    } else {
      swal("Don't have address", 'Please add address', 'warning');
      navigate('/address');
    }
  }, []);

  useEffect(() => {
    if (success) {
      if (success === 'true') {
        swal('Success!', '', 'success');
        navigate('/history-order');
      } else {
        swal('Failed!', '', 'Failed');
      }
    }
  }, []);

  const addOrderByCart = async () => {
    const idProductVariations = cartDetails.map(
      (item) => item.productVariation.id,
    );
    const result = await orderAPI.addOrderByCart({
      note: note,
      idAddress: address.id,
      paymentMethod: payment,
      idProductVariations: idProductVariations,
    });

    if (result) {
      if (result.payUrl) {
        window.location.href = result.payUrl;
      }

      swal('Success!', '', 'success');
    } else {
      swal('Failed!', '', 'error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartDetails.length > 0) {
      addOrderByCart();
    } else {
      swal('Have no item!', 'Please choose item!', 'warning');
    }
  };

  const shipments = [
    {
      id: 'payment',

      name: 'COD',
      image: COD,
      key: 'OFFLINE_CASH_ON_DELIVERY',
    },
    {
      id: 'payment',

      name: 'MoMo',
      image: Momo,
      key: 'ONLINE_PAYMENT_MOMO',
    },
    {
      id: 'payment',

      name: 'Paypal',
      image: Paypal,
      key: 'ONLINE_PAYMENT_PAYPAL',
    },
  ];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('form')}>
        <FormPayment
          title="SHIPPING INFORMATION"
          height="auto"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className={cx('form-content')}>
            <div>
              <Input
                type="text"
                placeholder="Your name..."
                className={cx('input', 'name-input', 'payment-input')}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Your phone..."
                className={cx('input', 'phone-input', 'payment-input')}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <Input
              type="email"
              placeholder="Your email..."
              className={cx('input', 'payment-input')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={cx('address')}>
              {address && (
                <span className={cx('address-detail')}>
                  {address.addressDetail +
                    ', ' +
                    address.addressWard.name +
                    ', ' +
                    address.addressWard.district.name +
                    ', ' +
                    address.addressWard.district.provinceCity.name}
                </span>
              )}
            </div>

            <Input
              type="text"
              placeholder="Your note..."
              className={cx('input', 'payment-input')}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className={cx('sub-title')}>PAYMENT METHOD</div>
            {shipments.map((item, index) => {
              return (
                <div key={index}>
                  <Radio
                    obj={item}
                    checked={payment === item.key}
                    onChange={() => setPayment(item.key)}
                  />
                </div>
              );
            })}
            <div className={cx('btn')}>
              <Button
                primary
                children="PAY"
                rounded
                className={cx('pay-btn')}
              />
            </div>
          </div>
        </FormPayment>
      </div>
      <div className={cx('cart-details')}>
        <ListCartItem listItems={cartDetails} />
      </div>
    </div>
  );
}

export default CartComponent;
