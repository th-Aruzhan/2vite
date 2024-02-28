import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CatalogProducts } from "./catalog-products/catalog-products";

import { getCatalogCategories } from "../../../api/get-catalog-categories";

import style from "./catalog-categories.module.css";

export const CatalogCategories = () => {
  const [catalogCategories, setCatalogCategories] = useState([]);

  const displayCategories = async () => {
    const response = await getCatalogCategories();
    if (response) {
      setCatalogCategories(response);
    }
  };

  useEffect(() => {
    displayCategories();
  }, []);

  return (
    <section className={style.section}>
      <div className={style.category}>
        <ul className={style.catalog}>
          {catalogCategories.map((category, index) => (
            <li className={style.catalogMain} key={index}>
              <Link
                to={`/catalog/${category.id}`}
                className={style.categoryName}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <CatalogProducts />
    </section>
  );
};
