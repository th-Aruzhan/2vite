import { useEffect, useState } from "react";
import { getTopProducts } from "../../../api/get-top-products";
import { Link } from "react-router-dom";

import style from "./top-products.module.css";

export const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);

  const displayItems = async () => {
    const response = await getTopProducts();
    if (response) {
      setTopProducts(response);
    }
  };

  useEffect(() => {
    displayItems();
  }, []);

  return (
    <div className={style.homeapi}>
      {topProducts.map((product) => (
        <div className={style.card} key={product.id}>
          <p className={style.productTitle}>{product.title}</p>
          <img
            className={style.imgProduct}
            src={product.images[0]}
            alt={product.title}
            style={{ width: "300px" }}
          />
          <Link className={style.button1} to={`/catalog/${product.Id}/${product.id}`}>
            <button className={style.button}>See more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
