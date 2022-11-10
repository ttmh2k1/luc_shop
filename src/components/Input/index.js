import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ placeholder, type, value, id, name, className }) {
  const classes = cx('input', {
    [className]: className,
  });
  const ref = useRef();
  return (
    <input
      ref={ref}
      defaultValue={value}
      id={id}
      name={name}
      type={type}
      className={classes}
      placeholder={placeholder}
      onClick={() => {
        ref.current.select();
      }}
    />
  );
}

export default Input;
