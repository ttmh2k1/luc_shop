import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({
  categories = [
    'category 1',
    'category 2',
    'category 3',
    'category 4',
    'category 5',
  ],
}) {
  const listFilter = [
    'Date',
    'Rating',
    'Sell',
    'Price low down',
    'Price high up',
  ];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('categories')}>
          <div className={cx('title')}>
            {' '}
            <span>Categories</span>
          </div>
          <ul className={cx('list-categories')}>
            {categories.map((category, index) => {
              return (
                <div key={index} className={cx('category')}>
                  <li>{category}</li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className={cx('filters')}>
          <div className={cx('title')}>
            <span>Filter</span>
          </div>
          <ul className={cx('list-filter')}>
            {listFilter.map((filter, index) => {
              return (
                <div key={index} className={cx('filter')}>
                  <li>{filter}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
