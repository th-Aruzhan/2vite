import style from "./home-image.module.css";
import image from "../../../assets/images/miumiu_holiday-campaign_emma-corrin-3.jpg";

export const HomeImage = () => {
  return (
    <div className={style.wrapper}>
      <img className={style.image} src={image} alt={style.image} />
      <div className={style.imageMiumiu}></div>
      <h2 className={style.aboutMiumiu}> What you know about us ?</h2>
      <p className={style.aboutMiumiuInformation}>
        Miu Miu is an Italian high fashion brand and a subsidiary of Prada.
        Established in 1993 by Miuccia Prada, the brand is known for its
        avant-garde and playful designs. Miu Miu offers a unique blend of
        sophistication and youthfulness, targeting a younger demographic
        compared to its parent company. The brand encompasses a wide range of
        products, including ready-to-wear clothing, handbags, shoes, and
        accessories, all characterized by a distinctive and modern aesthetic.
      </p>
      <div className={style.catalogMain}>
      <h1 className={style.catalog}> Catalog </h1>
      </div>
    </div>
  );
};
