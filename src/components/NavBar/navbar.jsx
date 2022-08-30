import React, { useState } from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import Logo from '../../images/logo.png';


const NavBar = () => {    
    const [openBar , setOpenBar] = useState(false)

    return(
        <nav className='navbar'>
            <div className="brand"><img src={Logo} alt="" />Book'Loves</div>
            <button className="toggle-btn" onClick={() => setOpenBar(!openBar)} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </button>
            <div className={`${openBar ? 'navbar-links-active' : 'navbar-links'}`}>                
                <ul>
                    <li><a href=" ">Inicio</a></li>
                    <li><a href=" ">Categorias</a></li> {/* dropdown */}
                    <li><CartWidget /></li>                  
                </ul>
            </div>            
        </nav>        
    )
}

export default NavBar