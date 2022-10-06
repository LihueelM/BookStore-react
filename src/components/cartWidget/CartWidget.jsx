import { useContext , useState} from "react";
import { HiOutlineShoppingCart, HiTrash } from "react-icons/hi";
import { IoMdCloseCircleOutline  } from "react-icons/io";
import { Shop } from "../../context/ShopProvider";
import { useNavigate } from "react-router-dom";import './CartWidget.css'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const CartWidget = () => {   

    const {cart ,total,totalWidget, removeItem} = useContext(Shop)
    const [state ,setState] = useState(false)  
    const navigate = useNavigate()
    const totalProductos = total()
    const totalCart = totalWidget();

    const MySwal = withReactContent(Swal);

    const redireccion = () => {
        cart.length ?  
        navigate('/cart')
        :
        MySwal.fire({
            icon: 'warning',
            position:'top',
            title: <p>No hay productos en su carrito</p>,
            text:"Por favor anañada un producto",
            onOpen: () => {
              setTimeout(() => MySwal.clickConfirm(), 2500);
            }
        }) 
    }
    

    const viewManager = () => { state ? setState(false) : setState(true) } 

    return (        
        <>              
            <div className="container-icon-carrito">
                <HiOutlineShoppingCart className="CartIcon" onClick={viewManager}/>
                <span>{cart.length ? totalCart : ''}</span>
            </div>                     
            <div className={state ? 'cartOn'  : 'cartOff'}>
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
                                <th><HiTrash/></th>
                            </tr>
                        </thead>                    
                        {cart.map((item) => {
                            const eliminarItem = () => {
                                removeItem(item)
                                MySwal.fire({
                                    icon: 'success',
                                    position:'top-end',
                                    title: <p>Producto eliminado</p>,
                                })
                            }
                            return(
                                <tbody key={item.id}>
                                    <tr className="item-cart-aside">
                                        <td>{item.quantity}</td>
                                        <td><img src={item.image} alt={item.id} /></td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        <td onClick={eliminarItem}><HiTrash className="delete-item"/></td>
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