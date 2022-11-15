import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '~/ActionCreators/CartCreator';
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

const cx = classNames.bind(styles);

function CartComponent() {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const [options, setOptions] = useState({
    City: [{ value: 0, label: 'City' }],
    District: [{ value: 0, label: 'District' }],
    Ward: [{ value: 0, label: 'Ward' }],
  });

  const [name, setName] = useState(
    user.defaultAddress.receiveName ? user.defaultAddress.receiveName : '',
  );
  const [phone, setPhone] = useState(
    user.defaultAddress.receivePhone ? user.defaultAddress.receivePhone : '',
  );
  const [email, setEmail] = useState(user.email);
  const [city, setCity] = useState(
    user.defaultAddress.addressWard.district.provinceCity.id
      ? user.defaultAddress.addressWard.district.provinceCity.id
      : 0,
  );
  const [district, setDistrict] = useState(
    user.defaultAddress.addressWard.district.id
      ? user.defaultAddress.addressWard.district.id
      : 0,
  );
  const [ward, setWard] = useState(
    user.defaultAddress.addressWard.id ? user.defaultAddress.addressWard.id : 0,
  );
  const [addressDetail, setAdressDetail] = useState(
    user.defaultAddress.addressDetail ? user.defaultAddress.addressDetail : '',
  );
  const [note, setNote] = useState('');
  const [payment, setPayment] = useState('OFFLINE_CASH_ON_DELIVERY');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get('success');

  const getAllCity = async () => {
    const result = await addressAPI.getAllCity();

    setOptions({
      ...options,
      City: [
        ...options.City,
        ...result.map((city) => {
          return { value: city.id, label: city.name };
        }),
      ],
      District: [{ value: 0, label: 'District' }],
      Ward: [{ value: 0, label: 'Ward' }],
    });
  };

  const getDistrictOfCity = async (id) => {
    const result = await addressAPI.getDistrictOfCity(id);

    if (result) {
      setOptions({
        ...options,
        District: [
          { value: 0, label: 'District' },
          ...result.districts.map((district) => {
            return { value: district.id, label: district.name };
          }),
        ],
        Ward: [{ value: 0, label: 'Ward' }],
      });
    }
  };

  const getWardOfDistrict = async (id) => {
    const result = await addressAPI.getWardOfDistrict(id);
    if (result) {
      setOptions({
        ...options,
        Ward: [
          { value: 0, label: 'Ward' },
          ...result.wards.map((ward) => {
            return { value: ward.id, label: ward.name };
          }),
        ],
      });
    }
  };

  useEffect(() => {
    getAllCity();
  }, []);

  useEffect(() => {
    getDistrictOfCity(city);
  }, [city]);

  useEffect(() => {
    getWardOfDistrict(district);
  }, [district]);

  const getCart = async () => {
    const result = await cartAPI.getCart();
    if (result) {
      dispatch(updateCart(result));
    }
  };

  useEffect(() => {
    if (user.defaultAddress) {
      if (user.phoneConfirmed) {
        getCart();
      } else {
        swal("Haven't ever confirm phone", 'Please confirm phone', 'warning');
        // navigate('/phone');
      }
    } else {
      swal("Don't have address", 'Please add address', 'warning');
      // navigate('/address');
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

  const updateAddress = async () => {
    const result = await addressAPI.updateAddress(user.defaultAddress.id, {
      idAddressWard: ward,
      addressDetail: addressDetail,
      receiverName: name,
      receiverPhone: phone,
      isDefault: true,
    });
  };

  const addAddress = async () => {
    const result = await addressAPI.addAddress({
      idAddressWard: ward,
      addressDetail: addressDetail,
      receiverName: name,
      receiverPhone: phone,
      isDefault: true,
    });
  };

  const addOrderByCart = async () => {
    const idProductVariations = cart.map((item) => item.productVariation.id);
    if (user.defaultAddress) {
      if (
        user.defaultAddress.addressWard.id !== ward ||
        user.defaultAddress.addressDetail !== addressDetail ||
        user.defaultAddress.receiveName !== name ||
        user.defaultAddress.receivePhone !== phone
      ) {
        updateAddress();
      }
    } else {
      addAddress();
    }
    const result = await orderAPI.addOrderByCart({
      note: note,
      idAddress: user.defaultAddress.id,
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
            <Input
              placeholder="Address Details"
              type="text"
              className={cx('input', 'payment-input')}
              value={addressDetail}
              onChange={(e) => setAdressDetail(e.target.value)}
            />

            <div className={cx('select-row')}>
              <Select
                options={options.City}
                className={cx('select')}
                select={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Select
                options={options.District}
                className={cx('select')}
                select={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
              <Select
                options={options.Ward}
                className={cx('select')}
                select={ward}
                onChange={(e) => setWard(e.target.value)}
              />
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
