import React from 'react';
import Head from 'next/head';
import { Header } from '../../';

import classes from './MainLayout.module.scss';
import { CategoryProvider } from '../../../lib';

type MainLayoutType = {
  children: React.ReactNode;
  title?: string;
};

export const MainLayout: React.FC<MainLayoutType> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{`YAT ${title ? `| ${title}` : ''}`}</title>
        <meta name="description" content="YAT" />
      </Head>
      <div className={classes.mainLayout}>
        <CategoryProvider>
          <Header />
          <div className={classes.Content}>{children}</div>
        </CategoryProvider>
      </div>
    </>
  );
};
