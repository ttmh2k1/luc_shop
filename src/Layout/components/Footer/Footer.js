import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('address')}>
          <ul className={cx('list-address')}>
            <li className={cx('address-item')}>
              1 Võ Văn Ngân, Thủ Đức, TP Hồ Chí Minh
            </li>

            <li className={cx('address-item')}>
              Trang web thương mại điện tử mua bán quần áo và các mặt hàng liên quan
            </li>
          </ul>
        </div>
        <div className={cx('contacts')}>
          <ul className={cx('list-contacts')}>
            <li className={cx('contact-item')}>
              Lê Trần Thanh Hân
            </li>
            <li className={cx('contact-item')}>
              Email: 19110360@student.hcmute.edu.vn
            </li>
            <li className={cx('contact-item')}>
              Trần Thị Mỹ Huyền
            </li>
            <li className={cx('contact-item')}>
              Email: 19110371@student.hcmute.edu.vn
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
