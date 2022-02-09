import { Box, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { HeaderTitle } from '../../components';
import MenuIcon from '@mui/icons-material/Menu';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import styles from './Header.module.scss';

import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { Category } from './modules';
import clsx from 'clsx';

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <div className={styles.title}>
          <HeaderTitle>
            <Link href="/">HEADER</Link>
          </HeaderTitle>
        </div>
        <div className={styles.category}>
          <Button
            onClick={() => setOpen(!open)}
            variant="contained"
            endIcon={<MenuIcon />}
            sx={{ zIndex: '1000' }}
          >
            Категории
          </Button>
          <Category open={open} setOpen={setOpen} />
        </div>
        <div className={styles.sercher}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ minWidth: '100%' }}
          >
            <TextField
              sx={{ width: '100%' }}
              size="small"
              placeholder="Для поиска начните вводить текст"
            />
          </Box>
        </div>
        <div className={styles.iconGroup}>
          <Link href="/shops">
            <IconButton size="large">
              <StorefrontIcon fontSize="medium" />
            </IconButton>
          </Link>
          <IconButton size="large">
            <FavoriteIcon fontSize="medium" />
          </IconButton>
          <IconButton size="large">
            <ShoppingCartIcon fontSize="medium" />
          </IconButton>

          <IconButton size="large">
            <PersonIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
      <div
        className={clsx(styles.container, styles.subContainer)}
        style={{
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Link href="/category/2">Мужская одежда</Link>
        <Link href="/category/1">Женская одежда</Link>
        <Link href="/category/3">Детская одежда</Link>
        <Link href="/category/4">Обувь</Link>
        <Link href="/category/5">Игрушки</Link>
        <Link href="/category/7">Канцтовары</Link>
        <Link href="/category/6">Аксессуары</Link>
        <Link href="/category/15">Зоотовары</Link>
        <Link href="/category/8">Спорт товары</Link>
        <Link href="/category/12">Автотовары</Link>
        <Link href="/category/14">Распродажа</Link>
      </div>
    </div>
  );
};

export default Header;
