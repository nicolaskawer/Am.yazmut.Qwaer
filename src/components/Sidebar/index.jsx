import "./Sidebar.css";
import Logo from "../Logo";
import { FaTimes } from "react-icons/fa";
import { navigations } from "../../data";
import { Link } from "react-scroll";

const Sidebar = ({ openSidebar, onClose }) => (
  <div className={`sidebar ${openSidebar ? "visible" : ""}`} aria-hidden={!openSidebar}>
    <div className="sidebar__wrapper">
      <div className="flex__center top">
        <Logo />
        <button className="flex__center icon" onClick={onClose} aria-label="סגור תפריט">
          <FaTimes aria-hidden="true" />
        </button>
      </div>

      <nav className="middle navlinks">
        {navigations.map((nav) => (
          <Link
            key={nav.to}
            to={nav.to}
            smooth={true}
            duration={600}
            offset={-80}
            className="navitem"
            onClick={onClose}
          >
            {nav.label}
          </Link>
        ))}
      </nav>
    </div>
  </div>
);

export default Sidebar;
