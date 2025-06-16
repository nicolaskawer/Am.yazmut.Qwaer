import React from "react";
import "./About.css";
import { about } from "../../assets";
import { keypoints } from "../../data";
import { useAccessibility } from "../../accessibility";
const About = () => {
  useAccessibility();
  return (
    <section id="about">
      <div className="overlay__div">
        <div className="container">
          <div className="about__image">
            <img src={about} alt="" />
          </div>
          <div className="section__header">
            <h3 className="title">עלינו</h3>
            <h1 className="sub__heading">בניית חזונך,יצירת עתידך</h1>
            <p className="description">
              אנחנו צריכים לכתוב משהו כמו אצלנו בעם יזמות מבטיחים ל...
            </p>
            <div className="keypoints__container">
              {keypoints.map((keypoint, index) => (
                <div className="flex keypoint" key={index}>
                  <div className="flex__center primary icon">
                    {keypoint.icon}
                  </div>
                  <h4 className="title">{keypoint.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
