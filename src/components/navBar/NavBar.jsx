import React, { useContext, useState } from "react";
import './NavBar.css';
import CartWidget from "../cartWidget/CartWidget";
import Logo from '../../images/triangle.png';
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";



const NavBar = () => {    
    const value = useContext(Shop)
    console.log(value)
    const [openBar , setOpenBar] = useState(false)

    return(
        <nav className='navbar'> 
            <Link className="logo" to="/"><img src={Logo} alt="" />BOOKSTRAP</Link>     
            <button className="toggle-btn" onClick={() => setOpenBar(!openBar)} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </button>                                 
            <div className={openBar ? 'links-navbar-open' : 'links-navbar'}>
                <div className="categories">
                    <Link className="option" to="/">INICIO</Link>
                    <Link className="option" to="category/Fantasy">FANTASIA</Link>
                    <Link className="option" to="category/Clasic">CLASICOS</Link> 
                    <Link className="option" to="category/Adventure">AVENTURA</Link>
                    <Link className="option" to="category/Terror">TERROR</Link>  
                </div>
                <div className="categories">
                    <Link className="option" to="category/electronics">USUARIO</Link>
                    <CartWidget/>                                         
                </div>    
            </div>       
        </nav>        
    )
}


export default NavBar