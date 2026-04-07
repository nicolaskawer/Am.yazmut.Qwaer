import { logo } from "../../assets";
import "./Logo.css";

const Logo = () => (
  <div className="logo__container">
    <img src={logo} alt="ע.מ יזמות כללית" className="logo__img" />
    <h3>
      ע.מ<span className="text__gradient"> יזמות כללית</span>
    </h3>
  </div>
);

export default Logo;
