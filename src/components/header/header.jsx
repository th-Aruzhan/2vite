import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { FaCartArrowDown } from "react-icons/fa";


const Header = () => {
 

  return (
    <div className={styles.wrapper}>
      <div>
        <li className={styles.logo}>miu miu</li>
      </div>
      <div className={styles.linkWrapper}>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/catalog/1" className={styles.link}>
            Catalog
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={styles.link}>
            Contacts
          </Link>
        </li>
      </ul>
      </div>
      <div>
      
        <Link to="/cart" className={styles.link}>
          <FaCartArrowDown />
        </Link>
        
      </div>
    </div>
  );
};

export default Header;
