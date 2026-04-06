import "./About.css";
import { about } from "../../assets";
import { keypoints } from "../../data";
import SectionHeader from "../../components/SectionHeader";

const About = () => (
  <section id="about">
    <div className="overlay__div">
      <div className="container">
        <div className="about__image">
          <img src={about} alt="הצוות שלנו בעבודה" />
        </div>

        <div className="about__content">
          <SectionHeader
            label="עלינו"
            heading="בניית חזונך, יצירת עתידך"
            description="בעם יזמות ובנייה, אנו מחויבים לספק פרויקטים מעולים עם דגש על איכות, חדשנות ושביעות רצון הלקוח. עם למעלה מ-25 שנות ניסיון, אנו מביאים מומחיות, דיוק ויצירתיות לכל פרויקט, בין אם מדובר בבית פרטי, מגדל מגורים, או פרויקט מסחרי."
          />
          <div className="keypoints__container">
            {keypoints.map((kp) => (
              <div className="flex keypoint" key={kp.title}>
                <div className="flex__center primary icon" aria-hidden="true">
                  {kp.icon}
                </div>
                <h4 className="title">{kp.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
