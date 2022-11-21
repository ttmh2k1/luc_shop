import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({
  placeholder,
  type,
  value,
  id,
  name,
  className,
  onChange,
  readOnly = false,
}) {
  const classes = cx('input', {
    [className]: className,
  });
  const ref = useRef();
  return (
    <input
      ref={ref}
      value={value ? value : ''}
      id={id}
      name={name}
      type={type}
      className={classes}
      placeholder={placeholder}
      onClick={() => {
        ref.current.select();
      }}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
}

export default Input;
