import React from "react";
import './navbar.css'

const NavBar = () => {
   /*  let toggleButton = document.getElementsByClassName('toggle-btn')[0];
    let navbarLink = document.getElementsByClassName('navb-links')[0];

    toggleButton.addEventListener('click', () => {
        navbarLink.classList.toggle('active');
    }) */

    return(
        <nav className='navbar'>
            <div className="brand">Book'Loves</div>
            <a href=" " className="toggle-btn">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </a>
            <div className="navbar-links">                
                <ul>
                    <li><a href=" ">Inicio</a></li>
                    <li><a href=" ">Categorias</a></li>
                    <li><a href=" ">Comprar</a></li>
                </ul>
            </div>
        </nav>        
    )
}

export default NavBar