import React, { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCategories } from '../../../../lib';

import styles from './Category.module.scss';
import clsx from 'clsx';
import Link from 'next/link';

type CategoryListType = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const Category: React.FC<CategoryListType> = ({ setOpen, open }) => {
  const { categories } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryL2, setSelectedCategoryL2] = useState(null);
  const [selectedCategoryL3, setSelectedCategoryL3] = useState(null);
  const [selectedCategoryL4, setSelectedCategoryL4] = useState(null);

  const clearState = () => {
    setSelectedCategory(null);
    setSelectedCategoryL2(null);
    setSelectedCategoryL3(null);
    setSelectedCategoryL4(null);
  };

  useEffect(() => {
    if (!open) {
      clearState();
    }
  }, [open]);
  return (
    <>
      <div
        className={styles.Category_wrapper}
        onMouseLeave={() => setSelectedCategory(null)}
        onClick={() => setOpen(!open)}
      >
        <div
          onMouseEnter={() => setSelectedCategoryL2(null)}
          className={clsx(styles.Category, open && styles.Category__active)}
        >
          <span className={styles.Category_title}>Каталог</span>
          <div className={styles.Category_list}>
            {categories?.map((item) => (
              <Link key={item.id} href={`/category/${item.id}`}>
                <span
                  onMouseEnter={() => setSelectedCategory(item)}
                  className={styles.Category_list_item}
                >
                  {item.title}
                  {item?.children?.length > 0 && (
                    <ArrowForwardIosIcon fontSize="small" />
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {selectedCategory?.children?.length > 0 ? (
          <div
            className={styles.SubCategory}
            onMouseEnter={() => setSelectedCategoryL3(null)}
          >
            <span className={styles.SubCategory_title}>
              {selectedCategory.title}
            </span>
            <div className={styles.Category_list}>
              {selectedCategory.children.map((item) => (
                <Link key={item.id} href={`/category/${item.id}`}>
                  <span
                    onMouseEnter={() => setSelectedCategoryL2(item)}
                    className={styles.Category_list_item}
                  >
                    {item.title}
                    {item?.children?.length > 0 && (
                      <ArrowForwardIosIcon fontSize="small" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
        {selectedCategoryL2?.children?.length > 0 ? (
          <div
            className={clsx(styles.SubCategory)}
            onMouseEnter={() => setSelectedCategoryL4(null)}
          >
            <span className={styles.SubCategory_title}>
              {selectedCategoryL2.title}
            </span>
            <div className={styles.Category_list}>
              {selectedCategoryL2.children.map((item) => (
                <Link key={item.id} href={`/category/${item.id}`}>
                  <span
                    className={styles.Category_list_item}
                    onMouseEnter={() => setSelectedCategoryL3(item)}
                  >
                    {item.title}
                    {item?.children?.length > 0 && (
                      <ArrowForwardIosIcon fontSize="small" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
        {selectedCategoryL3?.children?.length > 0 ? (
          <div className={clsx(styles.SubCategory)}>
            <span className={styles.SubCategory_title}>
              {selectedCategoryL3.title}
            </span>
            <div className={styles.Category_list}>
              {selectedCategoryL3.children.map((item) => (
                <Link key={item.id} href={`/category/${item.id}`}>
                  <span
                    className={styles.Category_list_item}
                    onMouseEnter={() => setSelectedCategoryL4(item)}
                  >
                    {item.title}
                    {item?.children?.length > 0 && (
                      <ArrowForwardIosIcon fontSize="small" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
        {selectedCategoryL4?.children?.length > 0 ? (
          <div className={clsx(styles.SubCategory)}>
            <span className={styles.SubCategory_title}>
              {selectedCategoryL4.title}
            </span>
            <div className={styles.Category_list}>
              {selectedCategoryL4.children.map((item) => (
                <Link key={item.id} href={`/category/${item.id}`}>
                  <span className={styles.Category_list_item}>
                    {item.title}
                    {item?.children?.length > 0 && (
                      <ArrowForwardIosIcon fontSize="small" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      <div
        className={clsx(
          styles.CategoryOverflow,
          open && styles.CategoryOverflow__active
        )}
        onMouseEnter={() => clearState()}
        onClick={() => setOpen(!open)}
      ></div>
    </>
  );
};

export default Category;
