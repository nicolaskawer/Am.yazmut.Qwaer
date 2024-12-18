import React from 'react';
import "./Navbar.css";
import Logo from '../../components/Logo';
import { navigations } from '../../data';
import { Button, Link } from 'react-scroll';
import SocialHandles from '../../components/SocialHandles';
import { FaArrowTurnDown } from 'react-icons/fa6';
import {FiMenu} from "react-icons/fi";
const Navbar = () => {
    return(
        
        <nav className = 'flex__center navbar'>
                <button className = "flex__center icon menu__btn">
                <FiMenu/> 
                </button>
                <Logo />
            
            <div className=" navbar__links">
                {navigations.map((item,index)=>(
                    <Link
                    to= {item.to}
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
                <SocialHandles/>
               <div className="flex__center">
                <Link to ="contact" smooth={true} className="flex__center btn primary">Get a quote<FaArrowTurnDown/>
                </Link>
                </div>
            
        </nav>

        
    )
}

export default Navbar