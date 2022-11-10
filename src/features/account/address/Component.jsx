import { useState } from 'react';
import Button from '~/components/Button';
import ListAddress from '~/components/Layout/components/ListAddress';
import AddressForm from '~/components/Layout/components/AddressForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Address.module.scss';

const cx = classNames.bind(styles);

function AddressComponent() {
  const [address, setAddress] = useState(false);
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
                setAddress(!address);
              }}
              className={cx('btn-add')}
            />

            <div
              className={address ? cx('background') : cx('background-hidden')}
              onClick={() => {
                setAddress(!address);
              }}
            ></div>
            <div
              className={address ? cx('create-address') : cx('address-hidden')}
            >
              <AddressForm title="NEW ADDRESS" />
            </div>
          </div>
        </div>
        <div className={cx('content')}>
          <ListAddress />
        </div>
      </div>
    </div>
  );
}

export default AddressComponent;
