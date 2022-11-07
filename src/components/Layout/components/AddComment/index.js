import classNames from 'classNames/bind';
import styles from './AddComment.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AddComment() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('rating')}>
            <img src="" alt="{styles} " className={cx('product-image')} />
            <div className={cx('star')}></div>
          </div>
          <div className={cx('comment')}>
            <input className={cx('comment-input')}></input>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
