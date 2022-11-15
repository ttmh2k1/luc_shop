import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart, updateCount } from '~/ActionCreators/CartCreator';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as orderAPI from '~/api/orderApi';
import * as addressAPI from '~/api/addressApi';
import swal from 'sweetalert';
import Radio from '~/components/Radio';
import Input from '~/components/Input';
import Select from '~/components/Select';
import Button from '~/components/Button';
import FormPayment from '~/Layout/components/FormPayment';
import ListCartItem from '~/Layout/components/ListCartItem';
import Momo from '~/commons/assets/momo.png';
import Paypal from '~/commons/assets/paypal.png';
import COD from '~/commons/assets/cod.png';
import * as cartAPI from '~/api/cartApi';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { set } from 'react-hook-form';

const cx = classNames.bind(styles);

function CartComponent() {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const [newAddress, setNewAddress] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [payment, setPayment] = useState('OFFLINE_CASH_ON_DELIVERY');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listAdress, setListAddress] = useState([]);
  const [list, setList] = useState([]);
  const [address, setAddress] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get('success');

  useEffect(() => {
    getListAddress();
    setEmail(user.email);
  }, []);

  const getListAddress = async () => {
    const result = await addressAPI.getAddress();
    console.log(result);
    if (result) {
      setName(result[0].receiverName);
      setPhone(result[0].receiverPhone);
      setListAddress(result);
    }
  };

  const getCart = async () => {
    const result = await cartAPI.getCart();
    if (result) {
      dispatch(updateCart(result));
    }
  };

  // useEffect(() => {
  //   if (user.defaultAddress) {
  //     if (user.phoneConfirmed) {
  //       getCart();
  //     } else {
  //       swal("Haven't ever confirm phone", 'Please confirm phone', 'warning');
  //       // navigate('/phone');
  //     }
  //   } else {
  //     swal("Don't have address", 'Please add address', 'warning');
  //     // navigate('/address');
  //   }
  // }, []);

  useEffect(() => {
    if (success) {
      if (success === 'true') {
        swal('Success!', '', 'success');
        dispatch(updateCount(0));
        dispatch(updateCart([]));
        navigate('/history-order');
      } else {
        swal('Failed!', '', 'Failed');
      }
    }
  }, []);

  // const updateAddress = async () => {
  //   const result = await addressAPI.updateAddress(user.defaultAddress.id, {
  //     idAddressWard: ward,
  //     addressDetail: addressDetail,
  //     receiverName: name,
  //     receiverPhone: phone,
  //     isDefault: true,
  //   });
  // };

  // const addAddress = async () => {
  //   const result = await addressAPI.addAddress({
  //     idAddressWard: ward,
  //     addressDetail: addressDetail,
  //     receiverName: name,
  //     receiverPhone: phone,
  //     isDefault: true,
  //   });
  // };

  const addOrderByCart = async () => {
    const idProductVariations = cart.map((item) => item.productVariation.id);
    // if (user.defaultAddress) {
    //   if (
    //     user.defaultAddress.addressWard.id !== ward ||
    //     user.defaultAddress.addressDetail !== addressDetail ||
    //     user.defaultAddress.receiverName !== name ||
    //     user.defaultAddress.receiverPhone !== phone
    //   ) {
    //     updateAddress();
    //   }
    // } else {
    //   addAddress();
    // }
    const result = await orderAPI.addOrderByCart({
      note: note,
      idAddress: address,
      paymentMethod: payment,
      idProductVariations: idProductVariations,
    });

    if (result) {
      if (result.payUrl) {
        window.location.href = result.payUrl;
      } else {
        swal('Success!', '', 'success');
        navigate('/history-order');
      }
    } else {
      swal('Failed!', '', 'error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length > 0) {
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
    // {
    //   id: 'payment',

    //   name: 'Paypal',
    //   image: Paypal,
    //   key: 'ONLINE_PAYMENT_PAYPAL',
    // },
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

            <div className={cx('address-option')}>
              <Select
                options={
                  listAdress
                    ? listAdress.map((item) => {
                        const id = 'addres';
                        const value = item.id;
                        const label =
                          item.addressDetail +
                          ', ' +
                          item.addressWard.name +
                          ', ' +
                          item.addressWard.district.name +
                          ', ' +
                          item.addressWard.district.provinceCity.name;
                        return {
                          id: id,
                          value: value,
                          label: label,
                          name: item.receiverName,
                          phone: item.receiverPhone,
                        };
                      })
                    : []
                }
                className={cx('select')}
                select={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {/* <div className={cx('add-address')}>
                <Button
                  children="New Address"
                  text
                  onClick={() => {
                    setNewAddress(!newAddress);
                  }}
                />
              </div> */}
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
        <ListCartItem />
      </div>
    </div>
  );
}

export default CartComponent;
