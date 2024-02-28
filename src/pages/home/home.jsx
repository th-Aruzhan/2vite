import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import style from "./home.module.css";
import { TopProducts } from "./top-products/top-products.jsx";
import { HomeCategories } from "./home-categories/home-categories.jsx";
import { HomeImage } from "./home-image-Miumiu/home-image.jsx" 



function Home() {
  return (
    <>
      <Header />
      <div className={style.home}>
        <h1 className={style.textMiumiu}> miu miu miu </h1>
        <div className={style.homeGifMiuMiu}>
          <div className={style.homeGifMiumiu}></div>
        </div>
        <TopProducts />
        <HomeImage />
        <HomeCategories />


        
      </div>
    
      <Footer />
    </>
  );
}

export default Home;
