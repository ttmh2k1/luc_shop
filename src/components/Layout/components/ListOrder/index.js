import { useState } from 'react';
import OrderItem from '../OrderItem';
import classNames from 'classnames/bind';
import styles from './ListOrder.module.scss';

const cx = classNames.bind(styles);
const ListOrder = ({
  listOrder = [
    {
      id: 'OD0011111',
      product: [
        {
          name: 'Product Name 1',
          onSale: 15,
          price: 10000000,
          salePrice: 85000,
          quantity: 2,
          amount: 20,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Blue',
            hex: '#368495',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 2',
          price: 10000000,
          quantity: 5,
          amount: 10,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Black',
            hex: '#000',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 3',
          price: 10000000,
          quantity: 1,
          amount: 16,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Brow',
            hex: '#955b36',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 4',
          onSale: 15,
          price: 10000000,
          quantity: 10,
          amount: 14,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          salePrice: 85000,
          color: {
            name: 'Gray',
            hex: '#aaa',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
      ],
      status: 'Delivered',
      total: 2030000,
    },
    {
      id: 'OD0022222',
      product: [
        {
          name: 'Product Name 1',
          onSale: 15,
          price: 10000000,
          salePrice: 85000,
          quantity: 2,
          amount: 20,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Blue',
            hex: '#368495',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 4',
          onSale: 15,
          price: 10000000,
          quantity: 10,
          amount: 14,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          salePrice: 85000,
          color: {
            name: 'Gray',
            hex: '#aaa',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
      ],
      status: 'Delivered',
      total: 2030000,
    },
    {
      id: 'OD0033333',
      product: [
        {
          name: 'Product Name 1',
          onSale: 15,
          price: 10000000,
          salePrice: 85000,
          quantity: 2,
          amount: 20,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Blue',
            hex: '#368495',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
      ],
      status: 'Delivered',
      total: 2030000,
    },
    {
      id: 'OD004444',
      product: [
        {
          name: 'Product Name 3',
          price: 10000000,
          quantity: 1,
          amount: 16,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Brow',
            hex: '#955b36',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 4',
          onSale: 15,
          price: 10000000,
          quantity: 10,
          amount: 14,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          salePrice: 85000,
          color: {
            name: 'Gray',
            hex: '#aaa',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
      ],
      status: 'Delivered',
      total: 2030000,
    },
    {
      id: 'OD0055555',
      product: [
        {
          name: 'Product Name 1',
          onSale: 15,
          price: 10000000,
          salePrice: 85000,
          quantity: 2,
          amount: 20,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Blue',
            hex: '#368495',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 3',
          price: 10000000,
          quantity: 1,
          amount: 16,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Brow',
            hex: '#955b36',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 4',
          onSale: 15,
          price: 10000000,
          quantity: 10,
          amount: 14,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          salePrice: 85000,
          color: {
            name: 'Gray',
            hex: '#aaa',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
      ],
      status: 'Delivered',
      total: 2030000,
    },
    {
      id: 'OD0066666',
      product: [
        {
          name: 'Product Name 3',
          price: 10000000,
          quantity: 1,
          amount: 16,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Brow',
            hex: '#955b36',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 4',
          onSale: 15,
          price: 10000000,
          quantity: 10,
          amount: 14,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          salePrice: 85000,
          color: {
            name: 'Gray',
            hex: '#aaa',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
      ],
      status: 'Delivered',
      total: 2030000,
    },
    {
      id: 'OD007777',
      product: [
        {
          name: 'Product Name 1',
          onSale: 15,
          price: 10000000,
          salePrice: 85000,
          quantity: 2,
          amount: 20,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Blue',
            hex: '#368495',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 2',
          price: 10000000,
          quantity: 5,
          amount: 10,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Black',
            hex: '#000',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 3',
          price: 10000000,
          quantity: 1,
          amount: 16,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Brow',
            hex: '#955b36',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 4',
          onSale: 15,
          price: 10000000,
          quantity: 10,
          amount: 14,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          salePrice: 85000,
          color: {
            name: 'Gray',
            hex: '#aaa',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
      ],
      status: 'Delivered',
      total: 2030000,
    },
    {
      id: 'OD0088888',
      product: [
        {
          name: 'Product Name 1',
          onSale: 15,
          price: 10000000,
          salePrice: 85000,
          quantity: 2,
          amount: 20,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          color: {
            name: 'Blue',
            hex: '#368495',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
        {
          name: 'Product Name 4',
          onSale: 15,
          price: 10000000,
          quantity: 10,
          amount: 14,
          thumbnail:
            'https://cdn.shopify.com/s/files/1/1236/1344/products/vi-da-nam-card-retro-leonardo-ec06_300x.png?v=1640577488',
          salePrice: 85000,
          color: {
            name: 'Gray',
            hex: '#aaa',
          },
          description:
            'A product description is the marketing copy that explains what a product is and why its worth purchasing. The purpose of a product description is to supply customers with important information about the features and key benefits of the product so they re compelled to buy.',
        },
      ],
      status: 'Delivered',
      total: 2030000,
    },
  ],
}) => {
  const [pageState, setPageState] = useState(0);
  const PAGE_SIZE = 3;
  const pageCount = listOrder.length / PAGE_SIZE;

  const handleClickNext = () => {
    if (pageState < pageCount - 1) {
      return setPageState((prev) => prev + 1);
    } else {
      return setPageState(0);
    }
  };

  const handleClickBack = () => {
    if (pageState > 0) {
      return setPageState((prev) => prev - 1);
    } else {
      return setPageState(pageCount);
    }
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        {listOrder
          .slice(pageState * PAGE_SIZE, pageState * PAGE_SIZE + PAGE_SIZE)
          .map((item, index) => {
            return (
              <div className={cx('order')} key={index}>
                <OrderItem item={item} />
              </div>
            );
          })}
        <div className={cx('pagination')}>
          <div className={cx('list-btn')}>
            {pageState > 0 && (
              <div className={cx('page-btn')}>
                <span className={cx('icon')} onClick={handleClickBack}>
                  {'<'}
                </span>
                <span onClick={handleClickBack}>{pageState}</span>
              </div>
            )}
            <span className={cx('active')}>{pageState + 1}</span>
            {pageState < pageCount - 1 && (
              <div className={cx('page-btn')}>
                <span onClick={handleClickNext}>{pageState + 2}</span>
                <span className={cx('icon')} onClick={handleClickNext}>
                  {' '}
                  {'>'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
