import React, { useEffect, useState } from "react";
import "./Achievement.css";
import ReactOdometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css"; // Library to make achievements look better

const Achievement = ()=>{
    const [ projects, setProjects] = useState(0);
    const [ satisfaction, setSatisfaction]=useState(0);
    const [ experience, setExperience]=useState(0);

    //now making a static stats for the achivements
    useEffect(()=>{
    const timeout = setTimeout(()=>{
        setProjects(200);
        setSatisfaction(98);
        setExperience(30)
    },2000)

    return () =>{
        clearTimeout(timeout);
    }

    },[])

    return(
    <div className="achievements">
        {/*cartd start*/}
        <div className="achievement_card">
            <h3 className="title"> הושלם מעל</h3>
            <div className="flex">
                <h1 className="heading">+</h1>
                <ReactOdometer value={projects} className="'heading"/>
                
            </div>
            <p>פרויקטים</p>
        </div>
        {/*card end*/}



      {/*cartd start*/}
      <div className="achievement_card">
            <h3 className="title"> הושג</h3>
            <div className="flex">
                <h1 className="heading">%</h1>
                <ReactOdometer value={satisfaction} className="'heading"/>
            </div>
            <p>דירוג שביעות רצון הלקוח</p>
        </div>
        {/*card end*/}



      {/*cartd start*/}
      <div className="achievement_card">
            <h3 className="title">יותר</h3>
            <div className="flex">
                <h1 className="heading">+</h1>
                <ReactOdometer value={experience} className="'heading"/>  
            </div>
            <p>שנות פעילות</p>
        </div>
        {/*card end*/}
    </div>
)};
export default Achievement