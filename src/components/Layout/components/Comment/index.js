import CommentItem from '../CommentItem';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
const cx = classNames.bind(styles);

function Comment({ listComment = [] }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <Button children={'Create new comment'} />
        <div className={cx('content')}>
          {listComment.map((comment, index) => {
            return (
              <div className={cx('comment')} key={index}>
                <CommentItem comment={comment} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comment;
