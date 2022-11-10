import CommentItem from '../CommentItem';
import AddComment from '../AddComment';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Comment.module.scss';
const cx = classNames.bind(styles);

function Comment({
  listComment = [
    {
      user: 'Kiet Nguyen 1',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 3,
    },
    {
      user: 'Kiet Nguyen 2',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 4,
    },
    {
      user: 'Kiet Nguyen 3',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 4',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 5',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 2,
    },
    {
      user: 'Kiet Nguyen 6',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 1,
    },
    {
      user: 'Kiet Nguyen 7',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 3,
    },
    {
      user: 'Kiet Nguyen 8',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 4,
    },
    {
      user: 'Kiet Nguyen 9',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 10',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 11',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 2,
    },
    {
      user: 'Kiet Nguyen 12',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 1,
    },
    {
      user: 'Kiet Nguyen 13',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 3,
    },
    {
      user: 'Kiet Nguyen 14',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 4,
    },
    {
      user: 'Kiet Nguyen 15',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 16',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 17',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 2,
    },
    {
      user: 'Kiet Nguyen 18',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 1,
    },
    {
      user: 'Kiet Nguyen 19',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 3,
    },
    {
      user: 'Kiet Nguyen 20',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 4,
    },
    {
      user: 'Kiet Nguyen 21',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 22',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 23',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 2,
    },
    {
      user: 'Kiet Nguyen 24',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 1,
    },
    {
      user: 'Kiet Nguyen 25',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 5,
    },
    {
      user: 'Kiet Nguyen 26',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 2,
    },
    {
      user: 'Kiet Nguyen 27',
      avt: 'https://i.pinimg.com/736x/1c/ca/24/1cca24df3c875c58cf0a872350637007.jpg',
      date: '20-12-2022',
      text: 'Sản phẩm tốt lắm ạ! Mong shop ra thêm nhiều sản phẩm chất lượng mới, thật sự rất mong chờ luôn ạ',
      rating: 1,
    },
  ],
}) {
  const [pageState, setPageState] = useState(0);
  const [commentState, setCommentState] = useState(false);
  const PAGE_SIZE = 6;
  const pageCount = listComment.length / PAGE_SIZE;

  const handleClickNext = () => {
    if (pageState < pageCount - 1) {
      return setPageState((prev) => prev + 1);
    } else {
      return setPageState(0);
    }
  };

  const handleClickBack = () => {
    if (pageState > 0) {
      return setPageState((prev) => prev - 1);
    } else {
      return setPageState(pageCount);
    }
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('add-comment')}>
          <Button
            children={'Create new comment'}
            text={true}
            className={cx('btn')}
            onClick={() => {
              setCommentState(!commentState);
            }}
            rightIcon={
              <FontAwesomeIcon icon={faCirclePlus} className={cx('icon')} />
            }
          />
          <div
            className={
              commentState ? cx('background') : cx('background-hidden')
            }
            onClick={() => {
              setCommentState(!commentState);
            }}
          ></div>
          <div
            className={
              commentState ? cx('create-comment') : cx('comment-hidden')
            }
          >
            <AddComment />
          </div>
        </div>
        <div className={cx('content')}>
          <div className={cx('list-comment')}>
            {listComment
              .slice(pageState * PAGE_SIZE, pageState * PAGE_SIZE + PAGE_SIZE)
              .map((comment, index) => {
                return (
                  <div className={cx('comment')} key={index}>
                    <CommentItem comment={comment} />
                  </div>
                );
              })}
            <div className={cx('pagination')}>
              <div className={cx('list-btn')}>
                {pageState > 0 && (
                  <div className={cx('page-btn')}>
                    <span className={cx('icon')} onClick={handleClickBack}>
                      {'<'}
                    </span>
                    <span onClick={handleClickBack}>{pageState}</span>
                  </div>
                )}
                <span className={cx('active')}>{pageState + 1}</span>
                {pageState < pageCount - 1 && (
                  <div className={cx('page-btn')}>
                    <span onClick={handleClickNext}>{pageState + 2}</span>
                    <span className={cx('icon')} onClick={handleClickNext}>
                      {' '}
                      {'>'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
