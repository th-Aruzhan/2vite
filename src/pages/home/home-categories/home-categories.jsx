import { useEffect, useState } from "react";
import { getHomeCategories } from "../../../api/home-categories";
import { Link } from "react-router-dom";
import style from "./home-categories.module.css";

export const HomeCategories = () => {
  const [homeCategories, setHomeCategories] = useState([]);

  const displayItems = async () => {
    const response = await getHomeCategories();
    console.log(response);
    if (response) {
      setHomeCategories(response);
    }
  };

  useEffect(() => {
    displayItems();
  }, []);

  return (
    <div className={style.homeapitwo}>
      {homeCategories.map((categori) => (
        <div className={style.card} key={categori.id}>
          <p className={style.categoriTitle}>{categori.name}</p>
          <Link to={`/catalog/${categori.id}`}>
          <img
            className={style.imgCategori}
            src={categori.image}
            alt={categori.title}
            style={{ width: "300px" }}
          />
          </Link>
        </div>
        
      ))}
    </div>
    
  );
};
