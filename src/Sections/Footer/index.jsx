import React from "react";
import "./Footer.css";
import Logo from "../../components/Logo";
import { footer } from "../../data";
import { useAccessibility } from "../../accessibility";
const Footer = () => {
  useAccessibility();
  return (
    <footer id="footer">
      <div className="overlay__div">
        <div className="container">
          <div className="column">
            <Logo />
            <p>
              המשימה שלנו היא לבנות וילות ובתים איכותיות תוך שמירה על מקצוענות
              עם פתרונות חדשניים כדי לענות על הצרכים המפותחים של העזרה והקהילות
              שלנו.
            </p>
          </div>
          {footer.map((foot, index) => (
            <div className="column" key={index}>
              <h4 className="title">{foot.title}</h4>
              {foot.routes.map((route, index) => (
                <a href={route.href} className="route" key={index}>
                  {route.name}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <p>Copyright &copy;AM Kawer Yazamut- all right reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
