import { useState, memo } from 'react';
import Subnav from '../Subnav';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
  const listItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Men',
      href: '/men',
    },
    {
      name: 'Women',
      href: '/women',
    },
    {
      name: 'Sale',
      href: '/sale',
    },
    {
      name: 'New Arrival',
      href: '/new-arrival',
    },
    {
      name: 'Best Seller',
      href: '/best-seller',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  const listCategoriesMen = [
    {
      name: 'Categories Men 1',
      listCategory: ['Category 1', 'Category 2', 'Category 3'],
    },
    {
      name: 'Categories Men 2',
      listCategory: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
      ],
    },
    {
      name: 'Categories Men 3',
      listCategory: ['Category 1', 'Category 2'],
    },
    {
      name: 'Categories Men 4',
      listCategory: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6',
      ],
    },
    {
      name: 'Categories Men 5',
      listCategory: ['Category 1', 'Category 2', 'Category 3'],
    },
  ];

  const listCategoriesWomen = [
    {
      name: 'Categories Women 1',
      listCategory: ['Category 1', 'Category 2', 'Category 3'],
    },
    {
      name: 'Categories Women 2',
      listCategory: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
      ],
    },
    {
      name: 'Categories Women 3',
      listCategory: ['Category 1', 'Category 2'],
    },
    {
      name: 'Categories Women 4',
      listCategory: [
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6',
      ],
    },
    {
      name: 'Categories Women 5',
      listCategory: ['Category 1', 'Category 2', 'Category 3'],
    },
  ];

  const [state, setState] = useState({
    subnavMen: {
      list: listCategoriesMen,
      isShow: false,
    },
    subnavWomen: {
      list: listCategoriesWomen,
      isShow: false,
    },
  });

  const handleHover = (index) => {
    if (index === 1) {
      return setState({
        subnavMen: {
          list: listCategoriesMen,
          isShow: true,
        },
        subnavWomen: {
          list: listCategoriesWomen,
          isShow: false,
        },
      });
    } else if (index === 2) {
      return setState({
        subnavMen: {
          list: listCategoriesMen,
          isShow: false,
        },
        subnavWomen: {
          list: listCategoriesWomen,
          isShow: true,
        },
      });
    }

    return setState({
      subnavMen: {
        list: listCategoriesMen,
        isShow: false,
      },
      subnavWomen: {
        list: listCategoriesWomen,
        isShow: false,
      },
    });
  };

  const handleUnHover = (index) => {
    if (index === 1 || index === 2) {
      return setState({
        subnavMen: {
          list: listCategoriesMen,
          isShow: false,
        },
        subnavWomen: {
          list: listCategoriesWomen,
          isShow: false,
        },
      });
    }

    return () => {};
  };

  return (
    <div onMouseOut={() => handleUnHover(1)}>
      <nav className={cx('nav')}>
        <ul className={cx('navbar')}>
          {listItems.map((item, index) => {
            return (
              <div
                // to={item.href}
                key={index}
                className={cx('items')}
                onMouseOver={() => handleHover(index)}
              >
                <li key={index} className={cx('item')}>
                  <a href={item.href}>{item.name}</a>

                  {index === 1 && <Subnav state={state.subnavMen}></Subnav>}
                  {index === 2 && <Subnav state={state.subnavWomen}></Subnav>}
                </li>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default memo(Navbar);
