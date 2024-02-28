import style from "./footer.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";



function Footer() {
  return (
    <>
    <div className={style.footer}>
      <p className={style.textOurContacts}>MIU MIU CLUB OUR CONTACTS</p>
    <div className={style.text}>
    <a href="https://www.instagram.com/"><IoCall /></a>
    <a href=""><FaGithub /></a>
    <a href=""><FaInstagram /></a>
    <a href=""><MdMarkEmailRead /></a>
    </div>
    <div className={StyleSheet.socials}>
    </div>
    </div>
    </>
  ); 

}
export default Footer;
