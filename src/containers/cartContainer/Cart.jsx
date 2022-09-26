import { useContext } from "react";
import {Shop} from '../../context/ShopProvider'
import './Cart.css'

const Cart = () => {
    const {cart,removeItem} = useContext(Shop)
    return(
        <div className="container-cart-final">
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
    )
}

export default Cart;