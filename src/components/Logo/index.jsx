import React from "react";
import { logo } from "../../assets";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="flex__center logo__container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h3>
        A.M<span className="text__gradient"> KAWER YAZAMUT</span>
      </h3>
    </div>
  );
};

export default Logo;
