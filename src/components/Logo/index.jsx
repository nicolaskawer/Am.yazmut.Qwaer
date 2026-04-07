import { logo } from "../../assets";
import "./Logo.css";
const Logo = () => {
  return (
    <div className="flex__center logo__container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h3>
        א.מ.<span className="text__gradient"> יזמות ובנייה כללית</span>
      </h3>
    </div>
  );
};

export default Logo;
