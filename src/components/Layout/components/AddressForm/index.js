import React from 'react';
import Select from '~/components/Select';
import Button from '~/components/Button';
import Input from '~/components/Input';
import classNames from 'classnames/bind';
import styles from './AddressForm.module.scss';

const cx = classNames.bind(styles);
const AddressForm = ({ title = '', address = {} }) => {
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
  console.log(address);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('title')}>
            <span>{title}</span>
          </div>
          <div className={cx('select-row')}>
            <Select options={options.City} className={cx('select')} />
            <Select options={options.District} className={cx('select')} />
            <Select options={options.Ward} className={cx('select')} />
          </div>
          <div className={cx('address')}>
            <Input
              type="text"
              placeholder={'Address details'}
              value={address.addressDetails}
            />
          </div>

          <div className={cx('save')}>
            <Button primary children={'Add'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
