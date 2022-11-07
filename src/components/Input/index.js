import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ placeholder, type, className }) {
  const classes = cx('input', {
    [className]: className,
  });

  return <input type={type} className={classes} placeholder={placeholder} />;
}

export default Input;
