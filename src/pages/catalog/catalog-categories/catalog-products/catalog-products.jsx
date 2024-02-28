import { useEffect, useState, useCallback } from "react";
import { getProductsByCategory } from "../../../../api/get-catalog-products";
import { useParams, Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import style from "./catalog-products.module.css";

export const CatalogProducts = () => {
  const [catalogProducts, setCatalogProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  let { categoryId } = useParams();

  const displayProductsByCategory = useCallback(async (categoryId, page) => {
    const response = await getProductsByCategory(categoryId, page);
    if (response) {
      const filteredProducts = response.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCatalogProducts((prevProducts) => [...prevProducts, ...filteredProducts]);
    }
  }, [searchTerm]);

  const loadMoreProducts = async () => {
    await setPage((prevPage) => prevPage + 1);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setCatalogProducts([]);
    displayProductsByCategory(categoryId, page);
  }, [categoryId, page, displayProductsByCategory]);

  const handleAddToCart = (product) => {
    console.log(product);
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Product added to cart!"); // Показываем сообщение об успешном добавлении в корзину через alert
  };

  return (
    <section className={style.section}>
      <input className={style.searchInput}
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <div className={style.catalogImagesRandom}>
        <ul className={style.catalogProducts}>
          {catalogProducts.map((product, index) => (
            <li className={style.catalogMainImage} key={`${product.id}-${index}`}>
              <div
                className={style.button}
                onClick={() => handleAddToCart(product)}
              >
                <p className={style.textAddCArt}>Add cart <FaCartArrowDown /></p>
              </div>
              
              <Link to={`/catalog/${categoryId}/${product.id}`}>
                <img
                  className={style.imgProductCatalog}
                  src={product.images[0]}
                  alt={product.title}
                  style={{ width: "300px" }}
                />
              </Link>
              <p className={style.price}>{product.price}$</p>
              <p className={style.titleProduct}>{product.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.button}>
        <button className={style.btn} onClick={loadMoreProducts}>
          Learn more
        </button>
      </div>
    </section>
  );
};
