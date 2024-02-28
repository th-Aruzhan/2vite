import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

import { VscArrowRight } from "react-icons/vsc";
import { Container } from "react-bootstrap";

import prada from "../../assets/images/cq5dam.jpg";
import brands from "../../assets/images/brands.png";
import imagesCoverNews from "../../assets/images/cover_news.avif";

import style from "./about.module.css";

function About() {
  return (
    <div>
      <Header />
      <Container>
        <div className={style.pradaPicture}>
          <img className={style.prada} src={prada} alt={prada}></img>
          <h1 className={style.text}>Prada Re-Nylon e National Geographic</h1>
        </div>

        <section className={style.aboutPradaGroup}>
          <h1 className={style.title}> WHO WE ARE</h1>
          <p className={style.discription}>
            The Prada Group is a global leader in luxury, with a thoughtful and
            pioneering vision. We own some of the world’s most prestigious
            brands: Prada, Miu Miu, Church’s, Car Shoe, Marchesi 1824 and Luna
            Rossa. We offer an unconventional dialogue and interpretation of the
            contemporary, as expression of our way of doing business for PLANET,
            PEOPLE and CULTURE.
          </p>
        </section>
        <section className={style.pradaText}>
          <div className={style.textOfDriwers}>
            <h1>We must be </h1>
            <h2>DRIVERS OF CHANGE</h2>
          </div>
        </section>

        <section>
          <div className={style.aboutBrands}>
            <img className={style.imageBrands} src={brands} alt={brands}></img>
          </div>
          <div className={style.brandsTextLink}>
            <a
              className={style.brands}
              href={"https://www.pradagroup.com/en/brands/prada.html"}
            >
              PRADA
            </a>
            <a
              className={style.brands}
              href={"https://www.pradagroup.com/en/brands/prada.html"}
            >
              miumiu
            </a>
            <a
              className={style.brands}
              href={"https://www.pradagroup.com/en/brands/prada.html"}
            >
              Church’s
            </a>
          </div>
        </section>

        <section className={style.latestNews}>
          <div className={style.latestNewsText}>
            <h1>LATEST NEWS</h1>
            <a
              className={style.viewAll}
              href={"https://www.pradagroup.com/en/news-media/highlights.html"}
            >
              VIEW ALL <VscArrowRight />
            </a>
          </div>
        </section>

        <section className={style.news}>
          <div className={style.newsPradaReNylon}>
            <img
              className={style.images}
              src={imagesCoverNews}
              alt={imagesCoverNews}
            ></img>
            <div className={style.pradagroupImageDescription}>
              <p>JANUARY 24, 2024</p>
              <h5>
                JANUARY 24, 2024 Prada Re-Nylon in collaboration with National
              </h5>
              <p>
                Milan, 24th January 2024 - As part of a continued commitment to
                education and culture, on the occasion of the new Prada Re-Nylon
                Collection and campaign, Prada reveals the second step of an
                ongoing storytelling and media collaboration with National
                Geographic Creative Works. Exploring the ocean of the world,
                National Geographic Creative Works has expanded on the short
                film series debuted in 2019. That first step explained the how
                behind Prada Re-Nylon...
              </p>
            </div>

            <div className={style.pradagroup_image_description}>
              <p>JANUARY 23, 2024</p>
              <h6>Prada Group and UNESCO extend their SEA BEYOND...</h6>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
