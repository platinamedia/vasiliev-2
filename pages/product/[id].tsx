import { useRouter } from 'next/router';
import React from 'react';
import { ProductPage } from '../../feature';
import { MainLayout } from '../../modules';

const indexProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <ProductPage id={Number(id)} />
    </MainLayout>
  );
};

export default indexProductPage;
