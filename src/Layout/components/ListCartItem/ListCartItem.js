import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart, updateCount } from '~/ActionCreators/CartCreator';
import Button from '~/components/Button';
import CartItem from './CartItem';
import * as cartAPI from '~/api/cartApi';
import swal from 'sweetalert';
import classNames from 'classnames/bind';
import styles from './ListCartItem.module.scss';
import { getFeeShip } from '~/api/addressApi';
const cx = classNames.bind(styles);

function ListCartItem() {
  const [fee, setFee] = useState();

  const user = useSelector((state) => state.user.user);

  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  const idAddress = localStorage.getItem('fee-ship');

  const handleGetFeeShip = async () => {
    const data = await getFeeShip(idAddress);
    setFee(data.fee);
  };

  useEffect(() => {
    handleGetFeeShip();
  }, [idAddress]);

  const total = cart
    .map(
      (item) =>
        item.productVariation.price *
        ((100 - item.productVariation.discount) / 100) *
        item.quantity,
    )
    .reduce((acc, item) => acc + item, 0);

  const removeCart = async (id) => {
    const result = await cartAPI.removeCart(id);

    return result;
  };

  const handleRemoveItem = (key, indexCart) => {
    swal({
      title: 'Do you want to remove this item??',
      text: 'Let confirm your decision!!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        if (removeCart(key)) {
          swal('Your item was removed!', '', 'success');

          dispatch(
            updateCart(cart.filter((item, index) => index !== indexCart)),
          );

          dispatch(updateCount(count - cart[indexCart].quantity));
        } else {
          swal("Can't removed that!", '', 'error');
        }
      } else {
        swal('Your item is safe!');
      }
    });
  };

  const handleRemoveAll = (e) => {
    e.preventDefault();
    swal({
      title: 'Do you want to remove all??',
      text: 'Let confirm your decision!!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const check = cart
          .map((item) => removeCart(item.productVariation.id))
          .every((item) => item);

        if (check) {
          swal('Your item was removed!', '', 'success');
          dispatch(updateCart([]));

          dispatch(updateCount(0));
        } else {
          swal("Can't removed that!", '', 'error');
        }
      } else {
        swal('Your items is safe!');
      }
    });
  };
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
            onClick={(e) => handleRemoveAll(e)}
          />
        </div>
        <div className={cx('content')}>
          {cart.map((item, index) => {
            return (
              <div className={cx('item')} key={item.productVariation.id}>
                <Button
                  text={true}
                  children={'x'}
                  className={cx('btn-delete')}
                  onClick={() =>
                    handleRemoveItem(item.productVariation.id, index)
                  }
                />
                <div className={cx('cart-item')}>
                  <CartItem product={item} indexList={index} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={cx('description')}>
          <div className={cx('des-item')}>
            <span className={cx('label')}>Temporary</span>
            <span className={cx('value')}>{commas(total.toFixed(0) + '')} VND</span>
          </div>
          <div className={cx('des-item')}>
            <span className={cx('label')}>Discount</span>
            <span className={cx('value')}>- {commas((total * user?.rank?.discountRate / 100).toFixed(0) + '')} VND</span>
          </div>
          <div className={cx('des-item')}>
            {fee ? (
              <>
                <span className={cx('label')}>Delivery Fee</span>
                <span className={cx('value')}>{commas(fee.toFixed(0) + '')} VND</span>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className={cx('total')}>
          <span className={cx('label')}>Total</span>
          <span className={cx('value')}>{commas((total * (1 - user?.rank?.discountRate / 100) + fee).toFixed(0) + '')} VND</span>
        </div>
      </div>
    </div>
  );
}

export default ListCartItem;
