import React, { useContext } from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import Logo from '../../images/triangle.png';
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";



const NavBar = () => {    
    const value = useContext(Shop)
    console.log(value)

    return(
        <nav className='navbar'>                                       
            <ul className="links-navbar">
                <Link className="logo" to="/"><img src={Logo} alt="" />DIMENSIONAL BOOKS</Link>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="category/men's clothing">CATEGORIAS</Link></li>
                <li><Link to="category/women's clothing">SUSCRIPCIONES</Link></li>                                                  
            </ul>                
            <ul className="links-extra">
                <li><Link to="category/electronics">USUARIO</Link></li>
                <CartWidget />
            </ul>        
        </nav>        
    )
}


export default NavBar