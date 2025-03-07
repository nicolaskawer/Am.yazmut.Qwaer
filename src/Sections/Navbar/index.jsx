import React, { useState } from "react";
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
        onClose={() => setOpenSidebar(!openSidebar)}
      />

      <nav className={`flex__center navbar ${showNavbar ? "drop" : ""}`}>
        <Logo />

        <div className=" navbar__links">
          {navigations.map((item, index) => (
            <Link
              to={item.to}
              className="nav__item"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-300}
              key={index}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <SocialHandles />
        <div className="flex__center">
          <Link to="contact" smooth={true} className="flex__center btn primary">
            קבלת הצעת מחיר
            <FaArrowTurnDown />
          </Link>
          <button
            className="flex__center icon menu__btn"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
