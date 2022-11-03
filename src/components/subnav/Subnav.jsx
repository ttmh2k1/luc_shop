import React from 'react';
import './subnav.scss';
import { Link } from 'react-router-dom';

function SubNavbar({ state }) {
  return (
    <div>
      <ul className={state.isShow ? 'nav-sub' : 'sub-nav-hidden'}>
        {state.list.map((category, index) => {
          return (
            <ul className="categories" key={index}>
              <Link className="category-name" to="/women">
                {category.name}
              </Link>
              {category.listCategory.map((item, index) => {
                return (
                  <li className="category" key={index}>
                    <Link className="category-name" to="/women">
                      {item}
                    </Link>
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
