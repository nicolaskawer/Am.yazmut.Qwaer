import { useEffect, useState } from "react";
import "./Achievement.css";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";

// Consolidate the three counters into one state object
const TARGETS = { projects: 200, satisfaction: 98, experience: 30 };
const INITIAL = { projects: 0, satisfaction: 0, experience: 0 };

const Achievement = () => {
  const [counts, setCounts] = useState(INITIAL);

  useEffect(() => {
    const id = setTimeout(() => setCounts(TARGETS), 800);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="achievements">
      <div className="achievement_card">
        <h3 className="title">הושלם מעל</h3>
        <div className="flex">
          <h1 className="heading">+</h1>
          {/* Fix: removed stray quote from className */}
          <ReactOdometer value={counts.projects} className="heading" />
        </div>
        <p>פרויקטים</p>
      </div>

      <div className="achievement_card">
        <h3 className="title">הושג</h3>
        <div className="flex">
          <h1 className="heading">%</h1>
          <ReactOdometer value={counts.satisfaction} className="heading" />
        </div>
        <p>דירוג שביעות רצון הלקוח</p>
      </div>

      <div className="achievement_card">
        <h3 className="title">יותר</h3>
        <div className="flex">
          <h1 className="heading">+</h1>
          <ReactOdometer value={counts.experience} className="heading" />
        </div>
        <p>שנות פעילות</p>
      </div>
    </div>
  );
};

export default Achievement;
