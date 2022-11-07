import classNames from 'classnames/bind';
import styles from './ProductDetails.module.scss';
import ProductDetailsImage from '../ProductDetailsImage';
import DescriptsProduct from '../DescriptsProduct';
import RatingReviews from '../RatingReviews';
import Comment from '../Comment';

const cx = classNames.bind(styles);

function ProductDetails() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('list-image')}>
            <ProductDetailsImage />
          </div>

          <div className={cx('descripts-product')}>
            <DescriptsProduct />
          </div>
        </div>

        <div className={cx('evaluate')}>
          <div className={cx('rating-reviews')}>
            <RatingReviews />
          </div>

          <div className={cx('comment')}>
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
