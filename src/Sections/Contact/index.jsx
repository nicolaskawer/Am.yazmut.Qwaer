import { useState } from "react";
import "./Contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import SectionHeader from "../../components/SectionHeader";

const INITIAL_FORM = { fullName: "", email: "", phoneNumber: "", message: "" };

const validate = (formData) => {
  const errors = {};
  if (!formData.fullName.trim()) errors.fullName = "נא להזין שם מלא.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    errors.email = "כתובת אימייל אינה תקינה.";
  if (!/^05\d{8}$/.test(formData.phoneNumber))
    errors.phoneNumber = "יש להזין 10 ספרות המתחילות ב-05.";
  if (!formData.message.trim()) errors.message = "נא להזין הודעה.";
  else if (formData.message.trim().split(/\s+/).filter(Boolean).length > 500)
    errors.message = "ניתן להזין עד 500 מילים בלבד.";
  return errors;
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  return (
    <section id="contact">
      <div className="container">

        {/* ── Form (left DOM = right column in RTL) ── */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form__header">
            <SectionHeader
              label="צרו קשר"
              heading="נשמח לשמוע מכם"
              description="יש לכם פרויקט בראש? זקוקים לייעוץ מקצועי? מלאו את הטופס ונחזור אליכם בהקדם."
            />
          </div>

          {submitted && (
            <p className="form__success" role="alert">
              ✓ הטופס נשלח בהצלחה! נחזור אליך בהקדם.
            </p>
          )}

          {/* Row: full name + email */}
          <div className="form__row">
            <div className="field__group">
              <label className="field__label" htmlFor="fullName">שם מלא</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="ישראל ישראלי"
                value={formData.fullName}
                onChange={handleChange}
                className="control"
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && <span className="error" role="alert">{errors.fullName}</span>}
            </div>

            <div className="field__group">
              <label className="field__label" htmlFor="email">אימייל</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="control"
                aria-invalid={!!errors.email}
                dir="ltr"
              />
              {errors.email && <span className="error" role="alert">{errors.email}</span>}
            </div>
          </div>

          {/* Phone */}
          <div className="field__group">
            <label className="field__label" htmlFor="phoneNumber">מספר טלפון</label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              placeholder="05XXXXXXXX"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="control"
              aria-invalid={!!errors.phoneNumber}
              dir="ltr"
              inputMode="tel"
            />
            {errors.phoneNumber && <span className="error" role="alert">{errors.phoneNumber}</span>}
          </div>

          {/* Message */}
          <div className="field__group">
            <label className="field__label" htmlFor="message">הודעה</label>
            <textarea
              id="message"
              name="message"
              placeholder="ספרו לנו על הפרויקט שלכם..."
              value={formData.message}
              onChange={handleChange}
              className="control"
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className="error" role="alert">{errors.message}</span>}
          </div>

          <button type="submit" className="form__submit">
            שלח הודעה ←
          </button>
        </form>

        {/* ── Info Panel (right DOM = right side in RTL) ── */}
        <aside className="contact__info-panel">
          <div className="panel__header">
            <h2>פרטי התקשרות</h2>
            <p>
              אנחנו כאן בשבילכם — בין אם אתם מתכננים בנייה חדשה, שיפוץ
              מקיף, או סתם רוצים לשמוע ייעוץ מקצועי.
            </p>
          </div>

          {/* Email */}
          <div className="contact__card">
            <div className="card__icon" aria-hidden="true">
              <MdOutlineAlternateEmail />
            </div>
            <div className="card__body">
              <span className="card__label">דוא"ל</span>
              <a
                href="mailto:am.yazamut@gmail.com"
                className="card__value"
                dir="ltr"
              >
                am.yazamut@gmail.com
              </a>
            </div>
          </div>

          {/* Phone — dir="ltr" prevents RTL reordering of the number */}
          <div className="contact__card">
            <div className="card__icon" aria-hidden="true">
              <FiPhoneCall />
            </div>
            <div className="card__body">
              <span className="card__label">טלפון</span>
              <a
                href="tel:+972528909336"
                className="card__value"
                dir="ltr"
              >
                +972 52-890-9336
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="contact__card">
            <div className="card__icon" aria-hidden="true">
              <FiMapPin />
            </div>
            <div className="card__body">
              <span className="card__label">אזור פעילות</span>
              <span className="card__value" style={{ direction: "rtl", textAlign: "right" }}>
                מרכז הארץ והסביבה
              </span>
            </div>
          </div>

          {/* Trust badge */}
          <div className="contact__badge">
            <p>
              <strong>+200 פרויקטים</strong> הושלמו בהצלחה עם{" "}
              <strong>98% שביעות רצון לקוח</strong>. אנחנו מחויבים לאיכות,
              לדיוק ולשקיפות מלאה לאורך כל הדרך.
            </p>
          </div>
        </aside>

      </div>
    </section>
  );
};

export default Contact;
