import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({ product }) {
  const commas = (str) => {
    return str.replace(/.(?=(?:.{3})+$)/g, '$&.');
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {product.onSale && (
          <span className={cx('sale')}>On Sale {product.onSale}%</span>
        )}
        <div className={cx('thumbnail')}>
          <img src={product.thumbnail} alt="" className={cx('product-image')} />
        </div>
        <span className={cx('product-name')}>{product.name}</span>
        <div className={cx('product-price')}>
          <span className={product.onSale ? cx('old-price') : cx('price')}>
            {commas(product.price + '')} VND
          </span>
          {product.salePrice && (
            <span className={cx('sale-price')}>
              {commas(product.salePrice + '')} VND
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
