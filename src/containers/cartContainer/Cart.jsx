import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {Shop} from '../../context/ShopProvider'
import './Cart.css'

import useFirebase from "../../hooks/useFirebase";
import Loader from "../../components/Loader/Loader";
import Formulario from "../../components/Formulario/Formulario";

const Cart = () => {
    const {cart,removeItem,total} = useContext(Shop)
    const navigate = useNavigate()

    const [loading] = useFirebase()

    const precioFinal = total()
    const returnHome = () => {
        navigate('/')
    }
    return(
        <div className="container-cart-final">
            {
                loading ? 
                    <Loader />
                :
                cart.length ?
                    <div className="container-cart">  
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr className='tr-item-row'>
                                        <th>Unidades</th>
                                        <th>Producto</th>
                                        <th>Titulo</th>
                                        <th>Precio unitario</th>
                                        <th>Precio Total</th>
                                        <th></th>      
                                    </tr>
                                </thead>
                                {
                                    cart.map((item) => {
                                        const eliminarItem = () => {
                                            removeItem(item)
                                        }       
                                        return(
                                            <tbody key={item.id}>
                                                <tr className="tr-item">
                                                    <td>{item.quantity}</td>
                                                    <td> <img src={item.image} alt={item.title} /> </td>
                                                    <td>{item.title}</td>
                                                    <td>$ {item.price}</td>
                                                    <td>$ {(item.quantity * item.price).toFixed(2)}</td>                                    
                                                    <td>
                                                    <button className='remove-btn' onClick={eliminarItem}>Eliminar Item</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        </div>                      
                        <p className="precio-final-cart">Precio Final: ${precioFinal}</p>
                    </div>
                    :
                    <div className="empty">
                        <h2>No se encuentran items dentro del carrito</h2>
                        <button className="btn-return" onClick={returnHome}>Volver al inicio</button>
                    </div>
            }
            <Formulario />
        </div>        
    )
}

export default Cart;