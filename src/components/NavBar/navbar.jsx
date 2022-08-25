import React from "react";
import './navBar.css';
import CartWidget from "../cartWidget/CartWidget";
import Logo from '../../images/logo.png';


const NavBar = () => {
    /* let toggleButton = document.getElementsByClassName('toggle-btn')[0];
    let navbarLink = document.getElementsByClassName('navb-links')[0];

    toggleButton.addEventListener('click', () => {
        navbarLink.classList.toggle('active');
    }) */

    return(
        <nav className='navbar'>
            <div className="brand"><img src={Logo} alt="" />Book'Loves</div>
            <a href=" " className="toggle-btn">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </a>
            <div className="navbar-links">                
                <ul>
                    <li><a href=" ">Inicio</a></li>
                    <li><a href=" ">Categorias</a></li>
                    <li><CartWidget /></li>                  
                </ul>
            </div>            
        </nav>        
    )
}

export default NavBar