import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';
import ListAddress from '~/Layout/components/ListAddress';
import AddressForm from '~/Layout/components/ListAddress/AddressForm';
import * as addressAPI from '~/api/addressApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//import cookies from 'react-cookies';

import classNames from 'classnames/bind';
import styles from './Address.module.scss';

const cx = classNames.bind(styles);

function AddressComponent() {
  const [newAddress, setNewAddress] = useState(false);
  const [listAddress, setListAddress] = useState([]);
  let { add } = useParams();
  const getListAddress = async () => {
    const result = await addressAPI.getAddress();
    setListAddress(result);
  };

  useEffect(() => {
    getListAddress();
    add = 0;
  }, [add]);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('top')}>
          <div className={cx('title')}>
            <span>Address</span>
            <span className={cx('sub-title')}>Up to 10 address</span>
          </div>

          <div className={cx('add-address')}>
            <Button
              primary
              children={'New address'}
              leftIcon={
                <FontAwesomeIcon icon={faPlus} className={cx('icon')} />
              }
              onClick={() => {
                setNewAddress(!newAddress);
              }}
              className={cx('btn-add')}
            />

            <div
              className={
                newAddress ? cx('background') : cx('background-hidden')
              }
              onClick={() => {
                setNewAddress(!newAddress);
              }}
            ></div>
            <div
              className={
                newAddress ? cx('create-address') : cx('address-hidden')
              }
            >
              <AddressForm title="NEW ADDRESS" size={listAddress.length} />
            </div>
          </div>
        </div>
        <div className={cx('content')}>
          {listAddress.length > 0 ? (
            <ListAddress listAddress={listAddress} />
          ) : (
            <span className={cx('notify')}>
              Your don't have any addresss. Let add new address
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddressComponent;
