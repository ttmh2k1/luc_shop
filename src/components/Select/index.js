import classNames from 'classnames/bind';
import styles from './Select.module.scss';

const cx = classNames.bind(styles);
function Select({ options = [], className }) {
  const classes = cx('select', {
    [className]: className,
  });

  return (
    <div className={classes}>
      <select className={cx('slt')}>
        {options.map((item, index) => {
          return (
            <option className={cx('opt')} key={index} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
