import React from 'react';
import Button from '~/components/Button';
import Input from '~/components/Input';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function ProfileComponent({
  user = {
    username: 'kiet123nguyen',
    fullname: 'Kiet Nguyen',
    email: 'kiet123nguyen@gmail.com',
    phone: '09345943985',
    gender: 'male',
    birthday: '2002-03-04',
    avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
  },
}) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('title')}>
          <span>Individual Information</span>
        </div>
        <div className={cx('content')}>
          <div className={cx('profile')}>
            <form>
              <div className={cx('form-item')}>
                <span className={cx('label')}>Username</span>
                <span className={cx('username')}>{user.username}</span>
              </div>
              <div className={cx('form-item')}>
                <span className={cx('label')}>Full name</span>
                <Input
                  type={'text'}
                  placeholder={'Full name'}
                  className={cx('input')}
                  value={user.fullname}
                />
              </div>
              <div className={cx('form-item')}>
                <span className={cx('label')}>Email</span>
                <Input
                  type={'email'}
                  placeholder={'Email'}
                  className={cx('input')}
                  value={user.email}
                />
              </div>
              <div className={cx('form-item')}>
                <span className={cx('label')}>Phone number</span>
                <Input
                  value={user.phone}
                  type={'text'}
                  placeholder={'Phone number'}
                  className={cx('input')}
                />
              </div>
              <div className={cx('form-item')}>
                <span className={cx('label')}>Gender</span>
                <div className={cx('radio-gender')}>
                  <Input
                    name={'gender'}
                    id={'male'}
                    value={'Male'}
                    type={'radio'}
                    checked={user.gender === 'male' && true}
                    className={cx('input')}
                  />
                  <span className={cx('radio-label')}>Male</span>
                </div>
                <div className={cx('radio-gender')}>
                  <Input
                    name={'gender'}
                    id={'female'}
                    value={'Female'}
                    type={'radio'}
                    checked={user.gender === 'female' && true}
                    className={cx('input')}
                  />
                  <span className={cx('radio-label')}>Female</span>
                </div>
              </div>
              <div className={cx('form-item')}>
                <span className={cx('label')}>Birthday</span>
                <Input
                  type={'date'}
                  value={user.birthday}
                  className={cx('input')}
                />
              </div>
              <div className={cx('save')}>
                <Button primary children={'SAVE'} className={cx('btn-save')} />
              </div>
            </form>
          </div>
          <div className={cx('avatar')}>
            <img src={user.avt} alt="" />
            <div className={cx('upload')}>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
