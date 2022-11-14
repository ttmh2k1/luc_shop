import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ product }) {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };

  return (
    <div className={cx('wrapper')}>
      <a className={cx('container')} href={'/product-details/' + product.id}>
        {product.maxDiscount > 0 ? (
          <span className={cx('sale')}>On Sale {product.maxDiscount}%</span>
        ) : (
          ''
        )}
        <div className={cx('thumbnail')}>
          <img src={product.avatar} alt="" className={cx('product-image')} />
        </div>
        <span className={cx('product-name')}>
          {product.name
            .split(' ')
            .filter((item, index) => index < 4)
            .join(' ')}
        </span>
        <div className={cx('product-price')}>
          <span
            className={product.maxDiscount > 0 ? cx('old-price') : cx('price')}
          >
            {commas(
              ((product.minPrice * 100) / (100 - product.maxDiscount)).toFixed(
                0,
              ) + '',
            )}{' '}
            VND
          </span>
          {product.maxDiscount > 0 && (
            <span className={cx('sale-price')}>
              {commas(product.minPrice + '')} VND
            </span>
          )}
        </div>
      </a>
    </div>
  );
}

export default ProductItem;
