import React from "react";
import "./Contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact">
      <div className="overlay__div">
        <div className="container">
          <div className="flex right__container">
            <div className="contact__info__wrapper">
              {/* cotact info */}
              <div className="flex contact__info">
                <div className="flex__center icon">
                  <MdOutlineAlternateEmail />
                </div>
                <div className="details">
                  <h4>תתקשר איתנו דרך האיימל</h4>
                  <p className="muted">תמיכה מהירה ואמינה</p>
                  <p>
                    <a href="qeawr:am.yazamut@gmail.com">
                      am.yazamut@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              {/* cotact info end */}

              {/* cotact info */}
              <div className="flex contact__info">
                <div className="flex__center icon">
                  <FiPhoneCall />
                </div>
                <div className="details">
                  <h4>מספר טלפון</h4>
                  <p className="muted">התקשר אלינו</p>
                  <p>972528909336+</p>
                </div>
              </div>
              {/* cotact info end */}
            </div>
          </div>
          <form className="form">
            <div className="form__top">
              <h3 className="sub__heading">צור קשר</h3>
              <p className="muted">
                יש לך פרויקט בראש או זקוק לייעוץ מומחה? אנחנו כאן כדי לעזור! פנה
                אלינו להתייעצות, בירורים מותאמים אישית או להתחיל את הפרויקט
                הגדול הבא שלך עוד היום.
              </p>
            </div>
            <div className="form__middle">
              <input
                type="text"
                placeholder="שם מלא"
                name="fullName"
                className="control"
              />
              <input
                type="email"
                placeholder="איימל"
                name="email"
                className="control"
              />
              <input
                type="telephone"
                placeholder="מספר טלפון"
                name="phoneNumber"
                className="control"
              />
              <textarea
                name="message"
                placeholder="ההודעה שלך"
                className="control"
              ></textarea>
            </div>
            <div className="form__bottom">
              <button type="button" className="btn primary">
                שלח הודעה
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
