import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

function Radio({ objs = [], className }) {
  const [checked, setChecked] = useState(1);
  const classes = cx('radio', {
    [className]: className,
  });

  return (
    <div className={cx('wrapper')}>
      {objs.map((obj) => (
        <div key={obj.id} className={classes}>
          <input
            type="radio"
            id={obj.id}
            checked={checked === obj.id}
            onChange={() => setChecked(obj.id)}
          />
          {obj.image && <img src={obj.image} alt="" />}
          <span key={obj.id}>{obj.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Radio;
