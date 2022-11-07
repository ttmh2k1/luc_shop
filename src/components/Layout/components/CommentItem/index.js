import classNames from 'classnames/bind';
import styles from './CommentItem.module.scss';

const cx = classNames.bind(styles);

function CommentItem({ comment }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <img className={cx('img-avatar')} src="" alt="" />
          <div className={cx('comment-details')}>
            <span className={cx('customer-name')}>{comment.user}</span>
            <span className={cx('date')}>{comment.date}</span>
            <div className={cx('rating-star')}></div>
            <span className={cx('comment')}>{comment.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
