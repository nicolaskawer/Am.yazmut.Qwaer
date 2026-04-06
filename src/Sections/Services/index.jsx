import "./Services.css";
import { Link } from "react-scroll";
import { sketch } from "../../assets";
import { services } from "../../data";
import SectionHeader from "../../components/SectionHeader";

const Services = () => (
  <section id="services">
    <div className="overlay__div">
      <div className="container">
        {/* Top: header + sketch — two grid columns */}
        <div className="grid">
          <div className="services__intro">
            <SectionHeader
              heading="תכנן איתנו את פרויקט החלומות שלך"
              description="מוכן להגשים את החזון שלך? צוות המומחים שלנו מציע ייעוץ אישי שידריך אותך בכל שלב — מעיצוב ועד תקציב ומעבר לכך. בואו נניח את הבסיס לפרויקט הגדול הבא שלכם."
            />
            <Link to="contact" smooth={true} className="btn primary">
              קביעת התייעצות
            </Link>
          </div>
          <div className="object__contain">
            <img src={sketch} alt="" aria-hidden="true" />
          </div>
        </div>

        {/* Service cards */}
        <div className="grid services">
          {services.map((service) => (
            <div className="service" key={service.title}>
              <div className="flex top">
                <div className="flex__center icon" aria-hidden="true">
                  {service.icon}
                </div>
                <h4 className="title">{service.title}</h4>
              </div>
              <div className="middle">
                <p className="description">{service.description}</p>
              </div>
              <div className="flex bottom">
                <Link to="contact" smooth={true} className="btn">
                  קבל הצעת מחיר
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
