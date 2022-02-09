import React from 'react';
import { MainTitle } from '../../components';
import { CardsPanel } from '../../modules';
import { useProducts } from '../../lib';
import { MainLayout } from '../../modules';

import styles from './ShopPage.module.scss';

const indexShopPage = () => {
  const { popularProd, LoadButton } = useProducts('popular-products');

  return (
    <MainLayout title="EPICASTAR">
      <div className={styles.HomePage}>
        <div className={styles.queryDescription_shopLogo}>
          <img
            src="https://itorguyu.com//storage/images/shops/1613752135276.jpg"
            alt=""
          />
          <div className={styles.queryDescription_shopLogo_description}>
            <p>EPICASTAR</p>
            <span>
              какое-то описание какое-то описание какое-то описание какое-то
              описание какое-то описание какое-то описание
            </span>
          </div>
        </div>
        <MainTitle className={styles.title}>Товары:</MainTitle>
        <CardsPanel type="product" products={popularProd} />
        <LoadButton />
      </div>
    </MainLayout>
  );
};

export default indexShopPage;
