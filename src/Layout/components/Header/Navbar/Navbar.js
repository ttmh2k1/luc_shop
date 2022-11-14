import { useState, memo, useEffect } from 'react';
import Subnav from './Subnav';
import * as categoryAPI from '~/api/categoryApi';
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
      href: '/men/1/0/0',
    },
    {
      name: 'Women',
      href: '/women/1/0/0',
    },
    {
      name: 'Other',
      href: '/other/1/0/0',
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
  ];

  const [listCategories, setListCategories] = useState();

  const [state, setState] = useState({
    subnavMen: false,
    subnavWomen: false,
    subnavOther: false,
  });

  const getCategories = async () => {
    const result = await categoryAPI.getCategories();
    setListCategories(() => {
      const list = result.map((item) => {
        return item.child.map((category) => {
          return {
            id: category.id,
            name: category.name,
            listCategory: category.child.map((child) => {
              return { id: child.id, name: child.name };
            }),
          };
        });
      });
      return list;
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleHover = (index) => {
    if (index === 1) {
      return setState({
        ...state,
        subnavMen: true,
      });
    } else if (index === 2) {
      return setState({
        ...state,
        subnavWomen: true,
      });
    }
    if (index === 3) {
      return setState({
        ...state,
        subnavOther: true,
      });
    }

    return setState({
      subnavMen: false,

      subnavWomen: false,

      subnavOther: false,
    });
  };

  const handleUnHover = (index) => {
    if (index === 1 || index === 2 || index === 3) {
      return setState({
        subnavMen: false,

        subnavWomen: false,

        subnavOther: false,
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
                  <a href={item.href}>{item.name}</a>

                  {listCategories && index === 1 && (
                    <Subnav
                      state={{
                        isShow: state.subnavMen,
                        list: listCategories[0],
                        href: '/men',
                      }}
                    ></Subnav>
                  )}
                  {listCategories && index === 2 && (
                    <Subnav
                      state={{
                        isShow: state.subnavWomen,
                        list: listCategories[1],
                        href: '/women',
                      }}
                    ></Subnav>
                  )}
                  {listCategories && index === 3 && (
                    <Subnav
                      state={{
                        isShow: state.subnavOther,
                        list: listCategories[2],
                        href: '/other',
                      }}
                    ></Subnav>
                  )}
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
