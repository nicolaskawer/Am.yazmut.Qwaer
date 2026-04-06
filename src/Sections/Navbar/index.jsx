import { useState } from "react";
import "./Navbar.css";
import Logo from "../../components/Logo";
import { navigations } from "../../data";
import { Link } from "react-scroll";
import SocialHandles from "../../components/SocialHandles";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../../components/Sidebar";
import useNavbar from "../../hook/useNavbar";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { showNavbar } = useNavbar();

  return (
    <>
      <Sidebar
        openSidebar={openSidebar}
        onClose={() => setOpenSidebar(false)}
      />

      <nav className={`flex__center navbar ${showNavbar ? "drop" : ""}`}>
        <Logo />

        <div className="navbar__links">
          {navigations.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav__item"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-80}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <SocialHandles />

        <div className="flex__center">
          <Link to="contact" smooth={true} className="flex__center btn primary">
            קבלת הצעת מחיר
            <FaArrowTurnDown aria-hidden="true" />
          </Link>
          <button
            className="flex__center icon menu__btn"
            onClick={() => setOpenSidebar((prev) => !prev)}
            aria-label="פתח תפריט"
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
