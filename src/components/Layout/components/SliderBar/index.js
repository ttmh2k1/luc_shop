import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useLayoutEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function SliderBar() {
  const imageRef = useRef();

  const [state, setState] = useState(0);
  const sourcePhoto = [
    {
      id: 1,
      name: 'Product Name 1',
      description:
        'lkajsdlkas clkasj clkasjlkcja slkcjaslkjc alslkfds l dsjg gdsjhcj dscjah lkdajsclk aslkc aslkjc laksjc jhlasj lcas lkajsdlk lkajsdlkas clkasj clkasjlkcja slkcjaslkjc',
      link: 'https://cdn.shopify.com/s/files/1/1236/1344/collections/IMG_3112_1400x.jpg?v=1639987052',
    },
    {
      id: 2,
      name: 'Product Name 2',
      description:
        'lkajsdlkas clkasj clkasjlkcja slkcjaslkjc alslkfds l dsjg gdsjhcj dscjah lkdajsclk aslkc aslkjc laksjc jhlasj lcas',
      link: 'https://cdn.shopify.com/s/files/1/1236/1344/collections/DSCF6341_1400x.jpg?v=1639988410',
    },
    {
      id: 3,
      name: 'Product Name 3',
      description:
        'lkajsdlkas clkasj clkasjlkcja slkcjaslkjc alslkfds l dsjg gdsjhcj dscjah lkdajsclk aslkc aslkjc laksjc jhlasj lcas',
      link: 'https://cdn.shopify.com/s/files/1/1236/1344/collections/DSCF3299_1400x.jpg?v=1640052738',
    },
    {
      id: 4,
      name: 'Product Name 4',
      description:
        'lkajsdlkas clkasj clkasjlkcja slkcjaslkjc alslkfds l dsjg gdsjhcj dscjah lkdajsclk aslkc aslkjc laksjc jhlasj lcas',
      link: 'https://cdn.shopify.com/s/files/1/1236/1344/files/banner_250003fb-0932-4d0d-bd76-900dcaf113e4_1400x.png?v=1644215892',
    },
  ];

  const photos = [sourcePhoto[state]];
  if (state === 0) {
    photos.push(sourcePhoto[1]);
    photos.unshift(sourcePhoto[3]);
  } else if (state === sourcePhoto.length - 1) {
    photos.push(sourcePhoto[0]);
    photos.unshift(sourcePhoto[2]);
  } else {
    photos.push(sourcePhoto[state + 1]);
    photos.unshift(sourcePhoto[state - 1]);
  }
  console.log(state);
  const sizeList = photos.length;

  const handleClickNext = () => {
    imageRef.current.style.transition = 'transform 1s';
    imageRef.current.style.transform = `translateX(-${100}%)`;
    nextSlide();
  };

  const nextSlide = () => {
    setTimeout(() => {
      setState((prev) => {
        if (prev < sizeList) {
          return prev + 1;
        } else {
          return 0;
        }
      });
      console.log('tranform');
      imageRef.current.style.transition = 'transform 0s';
      imageRef.current.style.transform = `translateX(0%)`;
    }, 1000);
  };

  const handleClickBack = () => {
    imageRef.current.style.transition = 'transform 1s';
    imageRef.current.style.transform = `translateX(${100}%)`;

    prevSlide();
  };

  const prevSlide = () => {
    setTimeout(() => {
      setState((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return sizeList;
        }
      });
      imageRef.current.style.transition = 'transform 0s';
      imageRef.current.style.transform = `translateX(0%)`;
    }, 1000);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('slider')}>
        <div
          className={cx('slider-content')}
          ref={imageRef}
          style={{ transform: 'none' }}
        >
          {photos.map((photo, index) => {
            return (
              <div
                key={index}
                style={{ left: (index - 1) * 100 + '%' }}
                className={cx('slider-item')}
              >
                <div className={cx('item-details')}>
                  <h4>New Arrival</h4>
                  <h2>{photo.name}</h2>
                  <div className={cx('slider-product-description')}>
                    <span>{photo.description}</span>
                  </div>
                </div>
                <div className={cx('slider-product-layer')}></div>
                <img src={photo.link} alt="" className={cx('slider-image')} />

                <div className={cx('slider-product-button')}>
                  <Button
                    outline
                    rounded
                    children="Explore"
                    className={cx('btn', 'btn-explore')}
                  ></Button>
                  <Button
                    primary
                    rounded
                    children="Buy Now"
                    className={cx('btn', 'btn-buy-now')}
                  ></Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={cx('slider-selection')}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={handleClickBack}
            className={cx('slider-navigate-icon', 'slider-icon-prev')}
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={handleClickNext}
            className={cx('slider-navigate-icon', 'slider-icon-next')}
          />
        </div>
      </div>
    </div>
  );
}

export default SliderBar;
