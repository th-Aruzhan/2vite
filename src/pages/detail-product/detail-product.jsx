import { useEffect, useState } from "react";
import { getDetailProductById } from "../../api/get-detail-product";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { FaCartArrowDown } from "react-icons/fa";
import style from "./detail-product.module.css";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const { productId } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    displayItem(productId);
  }, [productId]);

  const displayItem = async (productId) => {
    const response = await getDetailProductById(productId);
    if (response) {
      setDetailProduct(response);
    }
  };

  const handleAddToCart = (product) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    existingCartItems.push(product);

    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    setShowNotification(true); // так это уведомление
    setTimeout(() => {
      setShowNotification(false); // так здесь скрываю уведомление после некоторого времени
    }, 3000); // мой таймер
  };

  return (
    <>
      <Header />
      <div className={style.basketApi}>
        <div className={style.images}>
          <div className={style.detailProductName}>
            <p className={style.productTitle}>{detailProduct.title}</p>
          </div>
          <div className={style.Basketiamge}>
            <img
              className={style.imgProduct}
              src={detailProduct.images}
              alt={detailProduct.title}
              style={{ width: "500px" }}
            />
            <div className={style.basketDiscription}>
              <p className={style.productDescription}>
                {detailProduct.description}
              </p>
              <div className={style.buttonPrice}>
                <p className={style.prise}>ЦЕНА</p>
              </div>
              <p className={style.productPrice}>{detailProduct.price}$</p>
              <button
                className={style.cart}
                onClick={() => handleAddToCart(detailProduct)}
              >
               Add cart<FaCartArrowDown />
              </button>
              <p className={style.productDescriptionn}>Описание</p>
            </div>
          </div>
        </div>

        {showNotification && (
          <div className={style.notification}>Товар добавлен в корзину!</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
