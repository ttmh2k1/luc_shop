import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import Menu from '~/Layout/components/Menu';
import MenuFixed from '~/Layout/components/MenuFixed';
import styles from './Women.module.scss';
import * as categoryAPI from '~/api/categoryApi';
import * as productAPI from '~/api/productApi';
import PageProduct from '~/Layout/components/PageProduct';

const cx = classNames.bind(styles);

function WomenComponent() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  let { id } = useParams();
  let { sort } = useParams();
  let { desc } = useParams();

  id = parseInt(id);
  sort = parseInt(sort);
  desc = desc === 'true';
  const getCategory = async () => {
    const result = await categoryAPI.getCategoryById(33);
    setCategories(() => {
      let list = [];
      result?.children?.map((item) => {
        item?.children?.map((category) => {
          list = [
            ...list,
            {
              id: category.id,
              name: category.name,
            },
          ];
        });
      });
      getProduct(id === 1 ? list[0].id : id);
      return list;
    });
  };

  const getProduct = async (id) => {
    const result = await productAPI.getProduct({
      idCategory: id,
      size: 50,
      sortBy: sort,
      sortDescending: desc,
    });

    setProducts(result);
  };

  useEffect(() => {
    getCategory();
  }, [id, sort, desc]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('menu')}>
          {categories.length > 0 && (
            <Menu
              categories={categories}
              id={id === 1 ? categories[0].id : id}
              href="/women"
              filter={{ point: sort, desc: desc }}
            />
          )}
        </div>
        <div className={cx('menu-fixed')}>
          {categories.length > 0 && (
            <MenuFixed
              categories={categories}
              id={id === 1 ? categories[0].id : id}
              href="/women"
              filter={{ point: sort, desc: desc }}
            />
          )}
        </div>
        <div className={cx('content')}>
          {products.length > 0 && <PageProduct listProduct={products} />}
        </div>
      </div>
    </div>
  );
}

export default WomenComponent;
