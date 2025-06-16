import React from "react";
import "./Services.css";
import { Link } from "react-scroll";
import { sketch } from "../../assets";
import { services } from "../../data";
import { useAccessibility } from "../../accessibility";
const Services = () => {
  useAccessibility();
  return (
    <section id="services">
      <div className="overlay__div">
        <div className="container">
          <div className="grid">
            <div className="section__header">
              <h3 className="sub__heading">תכנן איתנו את פרויקט החלומות שלך</h3>
              <p className=" description">
                מוכן להגשים את החזון שלך? צוות המומחים שלנו מציע ייעוץ אישי
                שידריך אותך בכל שלב - מעיצוב ועד תקציב ומעבר לכך. בואו נניח את
                הבסיס לפרויקט הגדול הבא שלכם. קבע את פגישתך עוד היום!
              </p>
              <Link to="contact" className="btn primary">
                קביעת התייעצות
              </Link>
            </div>
            <div className="object__contain">
              <img src={sketch} alt="" />
            </div>
          </div>
          {/*grid end*/}
          <div className="grid services">
            {services.map((service, index) => (
              <div className="service" key={index}>
                <div className="flex top">
                  <div className="flex__center icon">{service.icon}</div>
                  <h4 className="title">{service.title}</h4>
                </div>
                <div className="middle">
                  <p className="description">{service.description}</p>
                </div>
                <div className="flex bottom">
                  <Link to="contant" className="btn">
                    צור קשר
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
