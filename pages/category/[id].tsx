import { useRouter } from 'next/router';
import React from 'react';
import { CategoryItemPage } from '../../feature';
import { MainLayout } from '../../modules';

const indexCategoryPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainLayout>
      <CategoryItemPage id={Number(id)} />
    </MainLayout>
  );
};

export default indexCategoryPage;
