import { logo } from "../../assets";
import "./Logo.css";

const Logo = () => (
  <div className="logo__container">
    <img src={logo} alt="ע.מ יזמות כללית" className="logo__img" />
  </div>
);

export default Logo;
