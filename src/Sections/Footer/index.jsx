import "./Footer.css";
import Logo from "../../components/Logo";
import { footer } from "../../data";

const Footer = () => (
  <footer id="footer">
    <div className="container">
      {/* Brand column */}
      <div className="column">
        <Logo />
        <p>
          המשימה שלנו היא לבנות בתים ווילות איכותיים תוך שמירה על מקצוענות,
          שקיפות ופתרונות חדשניים שעונים על הצרכים של לקוחותינו.
        </p>
      </div>

      {/* Link columns */}
      {footer.map((col) => (
        <div className="column" key={col.title}>
          <h4 className="title">{col.title}</h4>
          {col.routes.map((route) => (
            <a href={route.href} className="route" key={route.name}>
              {route.name}
            </a>
          ))}
        </div>
      ))}
    </div>

    <div className="footer__bottom">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span>עם יזמות ובנייה</span> — כל הזכויות שמורות
      </p>
    </div>
  </footer>
);

export default Footer;
