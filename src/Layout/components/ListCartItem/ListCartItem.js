import { useState, useEffect } from 'react';
import Button from '~/components/Button';
import CartItem from './CartItem';
import * as cartAPI from '~/api/cartApi';
import swal from 'sweetalert';
import classNames from 'classnames/bind';
import styles from './ListCartItem.module.scss';
const cx = classNames.bind(styles);

function ListCartItem({ listItems }) {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };
  const [state, setState] = useState([]);

  useEffect(() => {
    if (listItems) {
      setState(listItems);
    }
  }, [listItems]);

  const total = state
    .map(
      (item) =>
        item.productVariation.price *
        (1 - item.productVariation.discount / 100) *
        item.quantity,
    )
    .reduce((acc, item) => acc + item, 0);

  const removeCart = async (id) => {
    const result = await cartAPI.removeCart(id);

    return result;
  };

  const handleRemoveItem = (key) => {
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
          window.location.reload();
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
        console.log(state);
        const check = state
          .map((item) => removeCart(item.productVariation.id))
          .every((item) => item);

        console.log(check);

        if (check) {
          swal('Your item was removed!', '', 'success');
          window.location.reload();
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
          {state.map((item, index) => {
            return (
              <div className={cx('item')} key={index}>
                <Button
                  text={true}
                  children={'x'}
                  className={cx('btn-delete')}
                  onClick={() => handleRemoveItem(item.productVariation.id)}
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
