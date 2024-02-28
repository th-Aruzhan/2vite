import { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { LuShoppingBag } from "react-icons/lu";
import style from "./cart.module.css";

function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <div>
      <Header />
      <div className={style.cartPage}>
        <p>
Your shopping bag :D</p>

<div className={style.cart}>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((cartItem) => (
            <div className={style.cartItem} key={cartItem.id}>
              {cartItem.images && cartItem.images[0] && ( // проверка, существует ли свойство images и есть ли в нем элементы
                <img className={style.images} src={cartItem.images[0]} style={{ width: "300px" }} alt="" />
              )}
              <div className={style.cartItemPriceTitle}>
              <div className={style.cartTitle}>{cartItem.title}</div>
              <div className={style.cartPrice}>{cartItem.price}$ <LuShoppingBag /></div>
              <div className={style.discription}>{cartItem.description}</div>
              </div>
            </div>
          ))}
          <button className={style.button} onClick={clearCart}>Очистить корзину</button>
        </div>
      ) : (
        <div className={style.loadingAndButtonPosition}>
          <p className={style.loading}>Loading</p>
          <div className={style.buttonPositon}>
          <button className={style.button} disabled>Очистить корзину</button>
        </div>
        </div>

        
      )}
      </div>
      </div>
       <Footer />
    </div>
   
  );
}

export default Cart;