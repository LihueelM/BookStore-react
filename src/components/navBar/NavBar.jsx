import React, { useState } from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import Logo from '../../images/triangle.png';
import { Link } from "react-router-dom";


const NavBar = () => {    
    const [openBar , setOpenBar] = useState(false)

    return(
        <nav className='navbar'>
            <div className="brand"> <Link to="/"><img src={Logo} alt="" />Book's Market</Link></div>
            <button className="toggle-btn" onClick={() => setOpenBar(!openBar)} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </button>
            <div className={`${openBar ? 'navbar-links-active' : 'navbar-links'}`}>                
                <ul className="container-link-navbar">
                    <li><Link to="category/jewelery">Joyas</Link></li>
                    <li><Link to="category/men's clothing">Hombre</Link></li>
                    <li><Link to="category/women's clothing">Mujeres</Link></li>
                    <li><Link to="category/electronics">Electronica</Link></li>
                    <CartWidget/>                              
                </ul>
            </div>            
        </nav>        
    )
}

export default NavBar