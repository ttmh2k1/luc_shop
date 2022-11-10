import React from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import classNames from 'classnames/bind';
import styles from './ChangePassword.module.scss';

const cx = classNames.bind(styles);

function ChangePasswordComponent() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <span>Change Password</span>
        </div>
        <div className={cx('content')}>
          <form>
            <div className={cx('form-item')}>
              <span className={cx('label')}>Old password</span>
              <Input
                type="password"
                className={cx('input')}
                placeholder="Old password"
              />
            </div>
            <div className={cx('form-item')}>
              <span className={cx('label')}>New password</span>
              <Input
                type="password"
                className={cx('input')}
                placeholder="New password"
              />
            </div>
            <div className={cx('form-item')}>
              <span className={cx('label')}>Confirm password</span>
              <Input
                type="password"
                className={cx('input')}
                placeholder="Confirm password"
              />
            </div>
            <div className={cx('save')}>
              <Button primary children={'SAVE'} className={cx('btn-save')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordComponent;
