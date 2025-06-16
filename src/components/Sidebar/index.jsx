import React from "react";
import "./Sidebar.css";
import Logo from "../Logo";
import { Button } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { navigations } from "../../data";
import { Link } from "react-scroll";
import { useAccessibility } from "../../accessibility";

const Sidebar = ({ openSidebar, onClose }) => {
  useAccessibility();
  return (
    <div className={`sidebar ${openSidebar ? "visible" : ""}`}>
      <div className="sidebar__wrapper">
        <div className="flex__center top">
          <Logo />
          <Button className="flex__center icon" onClick={onClose}>
            <FaTimes />
          </Button>
        </div>
        <div className="middle navlinks">
          {navigations.map((nav, index) => (
            <Link
              to={nav.to}
              smooth={true}
              className="navitem"
              onClick={onClose}
              key={index}
            >
              {nav.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
