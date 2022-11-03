import Button from '../Button/Button';
import './slider.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useRef } from 'react';

function Slider() {
  const imageRef = useRef();
  const photos = [
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

  let count = 1;
  const sizeList = photos.length;

  const handleClickNext = () => {
    if (count < sizeList) {
      imageRef.current.style.transform = `translateX(-${count * 100}%)`;
      count++;
    } else {
      imageRef.current.style.transform = `translateX(${0}%)`;
      count = 1;
    }
  };

  const handleClickBack = () => {
    if (count <= 1) {
      imageRef.current.style.transform = `translateX(-${300}%)`;
      count = sizeList;
    } else {
      imageRef.current.style.transform = `translateX(-${(count - 2) * 100}%)`;
      count--;
    }
  };

  return (
    <div className="slider">
      <div
        className="slider-content"
        ref={imageRef}
        style={{ transform: 'none' }}
      >
        {photos.map((photo, index) => {
          return (
            <div
              key={index}
              style={{ left: index * 100 + '%' }}
              className={'slider-item'}
            >
              <div className="item-details">
                <h4>New Arrival</h4>
                <h2>{photo.name}</h2>
                <div className="slider-product-description">
                  <span>{photo.description}</span>
                </div>
              </div>
              <div className="slider-product-layer"></div>
              <img src={photo.link} alt="" className="slider-image" />

              <div className="slider-product-button">
                <Button text="Explore"></Button>
                <Button
                  text="Add to cart"
                  border={false}
                  background="#fff"
                  color="#000"
                ></Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="slider-selection">
        <NavigateBeforeIcon
          onClick={handleClickBack}
          className="slider-navigate-icon slider-icon-prev"
        ></NavigateBeforeIcon>

        <NavigateNextIcon
          onClick={handleClickNext}
          className="slider-navigate-icon slider-icon-next"
        ></NavigateNextIcon>
      </div>
    </div>
  );
}

export default Slider;
