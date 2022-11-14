import React from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cookies from 'react-cookies';
import { login } from '~/ActionCreators/UserCreator';
import * as userAPI from '~/api/userApi';
import classNames from 'classnames/bind';
import styles from './Email.module.scss';
import swal from 'sweetalert';

const cx = classNames.bind(styles);

function EmailComponent() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState(user.email);

  const [otp, setOtp] = useState('');

  const confirmEmail = async () => {
    const result = await userAPI.confirmEmail(otp);

    if (result) {
      swal('Successful!!', '', 'success');
      cookies.remove('user');
      console.log(result);
      cookies.save('user', result);

      dispatch(login(result));
      navigate(0);
    } else {
      swal('Failed!!', '', 'error');
    }
  };

  const sendOTP = async (e) => {
    e.preventDefault();

    const emailOTP = async () => {
      const result = await userAPI.emailOTP(email);

      if (result) {
        swal('OTP was sended!', 'Let submit OTP code!', 'success');
      } else {
        swal('Connect failed!', 'Please try again!', 'error');
      }
    };
    emailOTP();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmEmail();
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <span>Email Confirm</span>
        </div>
        <div className={cx('content')}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={cx('form-item')}>
              <span className={cx('label')}>Email</span>
              <Input
                type="email"
                className={cx('input')}
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={cx('verify')}>
              <div className={cx('OTP')}>
                <Input
                  type="text"
                  placeholder="OTP code"
                  className={cx('input')}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <Button
                  primary
                  children={'SEND OTP'}
                  className={cx('btn')}
                  onClick={(e) => sendOTP(e)}
                />
              </div>
            </div>
            <div className={cx('save')}>
              <Button primary children={'CONFIRM'} className={cx('btn-save')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailComponent;