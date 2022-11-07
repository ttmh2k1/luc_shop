import classNames from 'classnames/bind';
import styles from './RatingReviews.module.scss';

const cx = classNames.bind(styles);

function RatingReviews({ rating = '4.5', totalRating = '19192841' }) {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('rating-statistic')}>
            <h2 className={cx('title')}>RATING & REVIEWS</h2>
            <h1 className={cx('rating')}>{rating}</h1>
            <div className={cx('start')}></div>
            <span className={cx('statistic')}>
              Base on {commas(totalRating)} rating
            </span>
          </div>

          <div className={cx('rating-row')}>
            <div className={cx('row')}>
              <span className={cx('row-title')}>5 Star</span>
              <div className={cx('row-item')}></div>
            </div>
            <div className={cx('row')}>
              <span className={cx('row-title')}>4 Star</span>
              <div className={cx('row-item')}></div>
            </div>
            <div className={cx('row')}>
              <span className={cx('row-title')}>3 Star</span>
              <div className={cx('row-item')}></div>
            </div>
            <div className={cx('row')}>
              <span className={cx('row-title')}>2 Star</span>
              <div className={cx('row-item')}></div>
            </div>
            <div className={cx('row')}>
              <span className={cx('row-title')}>1 Star</span>
              <div className={cx('row-item')}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingReviews;
