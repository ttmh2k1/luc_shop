import { useState } from 'react';
import Button from '~/components/Button';
import AddressForm from './AddressForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ListAddress.module.scss';

const cx = classNames.bind(styles);
const ListAddress = ({ listAddress }) => {
  const [defaultAddress, setDefaultAddress] = useState(0);
  const [list, setList] = useState(listAddress);
  const [addressEdit, setAddressEdit] = useState(false);
  const [editItem, setEditItem] = useState(-1);
  const handleRemoveItem = (key) => {
    setList(list.filter((item, index) => index !== key));
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {list.map((address, index) => {
          return (
            <div className={cx('address-item')} key={index}>
              <div className={cx('address-content')}>
                <div className={cx('top')}>
                  <span className={cx('address')}>{address.addressDetail}</span>
                  {index === defaultAddress && (
                    <span className={cx('default')}>Default</span>
                  )}
                </div>
                <div className={cx('address-details')}>
                  <span className={cx('detail')}>
                    {address.addressWard.name + ','}
                  </span>
                  <span className={cx('detail')}>
                    {address.addressWard.district.name + ','}
                  </span>
                  <span className={cx('detail')}>
                    {address.addressWard.district.provinceCity.name}
                  </span>
                </div>
              </div>
              <div className={cx('action')}>
                <div className={cx('icon-action')}>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className={cx('icon')}
                    onClick={() => {
                      setAddressEdit(!addressEdit);
                      setEditItem(index);
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={cx('icon')}
                    onClick={() => handleRemoveItem(index)}
                  />
                  <div
                    className={
                      addressEdit ? cx('background') : cx('background-hidden')
                    }
                    onClick={() => {
                      setAddressEdit(!addressEdit);
                    }}
                  ></div>
                  <div
                    className={
                      addressEdit ? cx('create-address') : cx('address-hidden')
                    }
                  >
                    {index === editItem && (
                      <AddressForm
                        title="EDIT ADDRESS"
                        address={listAddress[index]}
                      />
                    )}
                  </div>
                </div>
                <Button
                  outline
                  children={'SET DEFAULT'}
                  className={cx('btn')}
                  disabled={index === defaultAddress && true}
                  onClick={() => setDefaultAddress(index)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListAddress;
