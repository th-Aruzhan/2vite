import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
// import style from "./catalog.module.css";
import { CatalogCategories } from "./catalog-categories/catalog-categories";
import Poster from "./poster/poster";



function Catalog() {
    return (
      <>
        <Header />
        <CatalogCategories />    
        <Poster />
        <Footer />
      </>
    );
  }
  
export default Catalog;
  




// import { useEffect, useState } from "react";
// import styles from "./catalog.module.css";
// import { getCategories } from "../../api/api";
// import { SkeletonCatalog } from "@mui/material";

// const HomeCatalog = () => {
//     const [ categories , setCategories ] = useState ([]);
//     const [ loading, setLoading ] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//               setCategories(await getCategories());
//             }catch (error) {
//                 console.error("Error fetching data:", error);
//             }finally{
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);


//     return (
//         <div className={styles.wrapper}>
//             <h2>Catalog</h2>
//             <div className={styles.cards}>
//                 {loading ? (
//                     [...new Array(5)].map((_, index) => (  
//                         <SkeletonCatalog key={index} />
//                      ))
//                 ) : (
//                     <div className={styles.cards}>
//                         {categories.map(({ id, image, name}) => (
//                             <div key={id} className={styles.categoryItem}> 
//                             <img src={image} alt={name} />
//                             <p>{name}</p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default HomeCatalog;