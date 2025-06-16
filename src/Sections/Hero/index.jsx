import React from "react";
import "./Hero.css";
import Achievement from "../../components/Achievement";
import { FaArrowTurnDown } from "react-icons/fa6";
import { Link } from "react-scroll";
import { crane } from "../../assets";
import { useAccessibility } from "../../accessibility";
const Hero = () => {
  useAccessibility();
  return (
    <section id="Hero" className="blur__effect">
      <div className="overlay__div">
        <div className="container">
          <div className="column right">
            <div className="hero__content">
              <h1 className="heading"> בונים את העתיד שלך</h1>
              <p className="description">
                אנו מחויבים לספק שירותי בנייה באיכות מעולה עם התמקדות בחדשנות,
                קיימות ושביעות רצון הלקוח. עם למעלה מ-30 שנות ניסיון, אנו מביאים
                מומחיות ודיוק לכל פרויקט, ועוזרים לעצב את העתיד באמצעות
              </p>
            </div>
            <Achievement />
            <div className=" flex__center buttons__wrapper">
              <Link to="portfolio" smooth={true} className="btn">
                פרויקטים
                <FaArrowTurnDown />
              </Link>
              <Link
                to="contact"
                smooth={true}
                className="flex__center btn primary"
              >
                לקבל הצעת מחיר
                <FaArrowTurnDown />
              </Link>
            </div>
          </div>
          <div className="column hero__image-container">
            <img src={crane} alt="" className="object__contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
