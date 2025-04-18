import React, { useState } from "react";
import "./Contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // טלפון ישראלי
    if (!/^05\d{8}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "מספר טלפון לא תקין. יש להזין 10 ספרות המתחילות ב-05.";
    }

    // אימייל מדויק לדומיינים מוכרים בלבד
    if (
      !/^[a-zA-Z0-9._%+-]+@(gmail|walla|hotmail|yahoo)\.(com|co\.il)$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "כתובת אימייל לא תקינה. יש להשתמש בדומיין מוכר (gmail, walla, וכו׳)";
    }

    // 500 מילים מקסימום (נחשב בפועל)
    const wordCount = formData.message.trim().split(/\s+/).length;
    if (wordCount > 500) {
      newErrors.message = "ההודעה ארוכה מדי. ניתן להזין עד 500 מילים בלבד.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null }); // נקה שגיאה כשמשנים
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("הטופס נשלח בהצלחה!");
      // שליחה לשרת או טיפול אחר...
    }
  };

  return (
    <section id="contact">
      <div className="overlay__div">
        <div className="container">
          <div className="flex right__container">
            <div className="contact__info__wrapper">
              <div className="flex contact__info">
                <div className="flex__center icon">
                  <MdOutlineAlternateEmail />
                </div>
                <div className="details">
                  <h4>תתקשר איתנו דרך האיימל</h4>
                  <p className="muted">תמיכה מהירה ואמינה</p>
                  <p>
                    <a href="mailto:am.yazamut@gmail.com">
                      am.yazamut@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex contact__info">
                <div className="flex__center icon">
                  <FiPhoneCall />
                </div>
                <div className="details">
                  <h4>מספר טלפון</h4>
                  <p className="muted">התקשר אלינו</p>
                  <p>+972528909336</p>
                </div>
              </div>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit} noValidate>
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
                value={formData.fullName}
                onChange={handleChange}
                className="control"
              />

              <input
                type="email"
                placeholder="איימל"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="control"
              />
              {errors.email && <span className="error">{errors.email}</span>}

              <input
                type="telephone"
                placeholder="מספר טלפון"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="control"
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}

              <textarea
                name="message"
                placeholder="ההודעה שלך"
                className="control"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <div className="form__bottom">
              <button type="submit" className="btn sec-primary">
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
