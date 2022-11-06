import { useState, memo } from 'react';
import Subnav from '../Subnav';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

function Navbar() {
  const listItems = [
    'Home',
    'Men',
    'Women',
    'Sale',
    'New Arrival',
    'Best Seller',
    'Contact',
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
    list: listCategoriesMen,
    isShow: false,
  });

  const handleHover = (index) => {
    if (index === 1) {
      return setState({
        list: listCategoriesMen,
        isShow: true,
      });
    } else if (index === 2) {
      return setState({
        list: listCategoriesWomen,
        isShow: true,
      });
    }

    return setState({
      ...state,
      isShow: false,
    });
  };

  const handleUnHover = (index) => {
    if (index === 1 || index === 2) {
      return setState({
        ...state,
        isShow: false,
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
                key={index}
                className={cx('items')}
                onMouseOver={() => handleHover(index)}
              >
                <li key={index} className={cx('item')}>
                  {item}

                  {index === 1 && <Subnav state={state}></Subnav>}
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
