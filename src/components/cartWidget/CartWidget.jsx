import { useContext , useState} from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoMdCloseCircleOutline  } from "react-icons/io";
import { Shop } from "../../context/ShopProvider";
import { useNavigate } from "react-router-dom";import './CartWidget.css'

const CartWidget = () => {   

    const {cart ,total} = useContext(Shop)
    const [state ,setState] = useState(false)  
    const navigate = useNavigate()
    const itemCart = cart.map((productos) => productos.quantity)
    const totalCart =  itemCart.reduce((acc , i)=> acc + i  , 0)
    const totalProductos = total()
    const redireccion = () => {
        navigate('/cart')
    }
    

    const viewManager = () => { state ? setState(false) : setState(true) } 

    return (        
        <>              
            <div className="container-icon-carrito">
                <HiOutlineShoppingCart className="CartIcon" onClick={viewManager}/>
                <span>{cart.length ? totalCart : ''}

                </span>
            </div>                     
            
            <div className={state ? 'cartOn' : 'cartOff'}>
                <div className="container-aside-cart">
                    <div className="header-cart">
                        <span onClick={viewManager} className={"close-btn"}> <IoMdCloseCircleOutline /> </span>
                        <span className="cart-title">TU CARRITO</span>
                    </div>
                    <table>
                        <thead>
                            <tr className="grilla">
                                <th>UND</th>
                                <th>VISTA</th>
                                <th>TITULO</th>
                                <th>PRECIO UNITARIO</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>                    
                        {cart.map((item) => {
                            return(
                                <tbody key={item.id}>
                                    <tr className="item-cart-aside">
                                        <td>{item.quantity}</td>
                                        <td><img src={item.image} alt={item.id} /> </td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                    </tr>
                                </tbody>
                            )                        
                        })}
                    </table>
                </div>  
                <div className="container-verificacion">
                    <p className="precio-final-cart">Precio total final: ${totalProductos} </p>
                    <button className="finalizar-cart" onClick={redireccion}>Verificar compra</button>
                </div>
                
            </div>
        </>
    )
    
}

export default CartWidget;