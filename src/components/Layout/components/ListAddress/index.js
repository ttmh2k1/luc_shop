import { useState } from 'react';
import Button from '~/components/Button';
import AddressForm from '~/components/Layout/components/AddressForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ListAddress.module.scss';

const cx = classNames.bind(styles);
const ListAddress = ({
  listAddress = [
    {
      addressDetails: 'Richmond City, Nguyễn Xí 1',
      ward: 'Phường 26',
      district: 'Quận Bình Thạnh',
      city: 'TP. Hồ Chí Minh',
    },
    {
      addressDetails: 'Richmond City, Nguyễn Xí 2',
      ward: 'Phường 26',
      district: 'Quận Bình Thạnh',
      city: 'TP. Hồ Chí Minh',
    },
    {
      addressDetails: 'Richmond City, Nguyễn Xí 3',
      ward: 'Phường 26',
      district: 'Quận Bình Thạnh',
      city: 'TP. Hồ Chí Minh',
    },
    {
      addressDetails: 'Richmond City, Nguyễn Xí 4',
      ward: 'Phường 26',
      district: 'Quận Bình Thạnh',
      city: 'TP. Hồ Chí Minh',
    },
    {
      addressDetails: 'Richmond City, Nguyễn Xí 5',
      ward: 'Phường 26',
      district: 'Quận Bình Thạnh',
      city: 'TP. Hồ Chí Minh',
    },
    {
      addressDetails: 'Richmond City, Nguyễn Xí 6',
      ward: 'Phường 26',
      district: 'Quận Bình Thạnh',
      city: 'TP. Hồ Chí Minh',
    },
  ],
}) => {
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
                  <span className={cx('address')}>
                    {address.addressDetails}
                  </span>
                  {index === defaultAddress && (
                    <span className={cx('default')}>Default</span>
                  )}
                </div>
                <div className={cx('address-details')}>
                  <span className={cx('detail')}>{address.ward + ','}</span>
                  <span className={cx('detail')}>{address.district + ','}</span>
                  <span className={cx('detail')}>{address.city}</span>
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
