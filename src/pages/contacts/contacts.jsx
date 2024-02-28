import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import style from "./contacts.module.css";
import imagesLocations from "../../assets/images/092019.png";

function Contacts() {
  return (
    <div>
      <Header />
      <div className={style.contactsPage}>
        <div className={style.titileContacts}>
          <p>Our Location</p>
        </div>

        <div className={style.locationSection}>
          <img
            className={style.imagesLocations}
            src={imagesLocations}
            alt={imagesLocations}
          ></img>
          <div className={style.location}>
            <ul className={style.locationName}>
              <li>
                American Dream, American Dream Way, Ист-Ратерфорд, Нью-Джерси,
                США
              </li>
              <li>
                American Museum of Natural History, Сентрал Парк Запад,
                Нью-Йорк, США
              </li>
              <li>America Gourmet Food, 6-я авеню, Нью-Йорк, США</li>
              <li>
                America Hair Style International, West 50th Street, Нью-Йорк,
                США
              </li>
              <li>AMC Empire 25, Запад 42-я стрит, Нью-Йорк, США</li>
            </ul>
          </div>
        </div>

        <div className={style.ourNetwork}>
          <div className={style.contactsUsTitle}>
            <h1>CONTACT US</h1>
            <p>Use one of the following methods to contact us</p>
          </div>

          <div className={style.contactsUsTitle}>
            <h2>Have you checked our frequently asked questions?</h2>
            <a
              className={style.linkFaq}
              href={"https://www.miumiu.com/us/en/faqs.html"}
            >
              Go to the FAQs
            </a>
          </div>
        </div>
        
        <div className={style.ourNetworks}>
          <div className={style.calourlientService}>
            <h3>Call our Client Service</h3>
          </div>

          <div className={style.ourClientService}>
            <p>
              To contact our Client Service, please call +1-888-964-8648 from
              Monday through Saturday 9 am - 10 pm, Sunday 9 am - 8 pm or fill
              out the form below. We are at your complete disposal for
              assistance or any questions.
            </p>
          </div>
        </div>

        <div className={style.sendMessage}>
          <div className={style.sendUsMessage}>
            <h5>Send us a message</h5>
          </div>

          <div className={style.sendUsMessageText}>
            <p>
              Connect with our Client Service via WhatsApp from Monday to
              Saturday 9:00 am - 10:00 pm and Sunday 9:00 am - 8:00 pm EST.
            </p>
            <a className={style.linkWhatsapp} href={""}>
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
