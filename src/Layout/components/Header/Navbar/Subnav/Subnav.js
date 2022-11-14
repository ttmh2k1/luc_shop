import React from 'react';
import './Subnav.module.scss';
import classNames from 'classnames/bind';
import styles from './Subnav.module.scss';

const cx = classNames.bind(styles);

function SubNavbar({ state }) {
  return (
    <div className={cx('wrapper')}>
      <ul className={state.isShow ? cx('nav-sub') : cx('sub-nav-hidden')}>
        {state.list.map((category, index) => {
          return (
            <ul className={cx('categories')} key={index}>
              <a
                className={cx('category-name')}
                href={state.href + '/' + category.id + '/0/0'}
              >
                {category.name}
              </a>
              {category.listCategory.map((item, index) => {
                return (
                  <li className={cx('category')} key={index}>
                    <a
                      className={cx('category-name')}
                      href={state.href + '/' + item.id + '/0/0'}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </ul>
    </div>
  );
}

export default SubNavbar;