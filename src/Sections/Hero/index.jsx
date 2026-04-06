import "./Hero.css";
import Achievement from "../../components/Achievement";
import { FaArrowTurnDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import { crane } from "../../assets";

const Hero = () => (
  <section id="Hero" className="blur__effect">
    <div className="overlay__div">
      <div className="container">
        <div className="column right">
          <div className="hero__content">
            <h1 className="heading">בונים את העתיד שלך</h1>
            <p className="description">
              אנו מחויבים לספק שירותי בנייה באיכות מעולה עם התמקדות בחדשנות,
              קיימות ושביעות רצון הלקוח. עם למעלה מ-30 שנות ניסיון, אנו
              מביאים מומחיות ודיוק לכל פרויקט, ועוזרים לעצב את העתיד.
            </p>
          </div>

          <Achievement />

          <div className="flex__center buttons__wrapper">
            <Link to="portfolio" smooth={true} className="btn">
              פרויקטים
              <FaArrowTurnDown aria-hidden="true" />
            </Link>
            <Link to="contact" smooth={true} className="flex__center btn primary">
              קבלת הצעת מחיר
              <FaArrowTurnDown aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="column hero__image-container">
          <img src={crane} alt="" className="object__contain" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
