import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ placeholder, type }) {
  return (
    <input type={type} className={cx('input')} placeholder={placeholder} />
  );
}

export default Input;
