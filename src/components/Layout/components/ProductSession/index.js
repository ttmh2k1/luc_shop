import classNames from 'classnames/bind';
import styles from './ProductSession.module.scss';
import ProductItem from '../ProductItem';

const cx = classNames.bind(styles);

function ProductSession({ listProduct = [] }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {listProduct.map((product, index) => {
          return (
            <a href="/product-details" className={cx('item')} key={index}>
              <ProductItem product={product} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default ProductSession;
