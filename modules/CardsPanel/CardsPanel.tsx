import React from 'react';
import { ProductCard, ShopCard } from '../../components';
import { ProductType } from '../../types';

import styles from './CardsPanel.module.scss';

const fiv = 48;
const is: string[] = [];
for (let i = 0; i < fiv; i++) {
  is.push(`123${i}`);
}

type CardsPanelType = {
  type: 'shop' | 'product';
  products?: ProductType[];
  columns?: number;
};

const CardsPanel: React.FC<CardsPanelType> = ({ type, products, columns }) => {
  columns = columns ? columns : 6;
  const columnsNumber = 100 / columns;
  const columnsWidth = columnsNumber.toString() + '%';
  return (
    <div className={styles.CardsPanel}>
      {type === 'shop' ? (
        <>
          {is.map((item) => (
            <div
              style={{ width: `${columnsNumber}%` }}
              className={styles.CardsPanel_item}
              key={item + '12'}
            >
              <ShopCard id={item} />
            </div>
          ))}
        </>
      ) : type === 'product' ? (
        <>
          {products?.map((item, i) => (
            <div
              style={{ width: columnsWidth }}
              className={styles.CardsPanel_item}
              key={i}
            >
              <ProductCard
                id={item.id}
                price={item.price}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default CardsPanel;
