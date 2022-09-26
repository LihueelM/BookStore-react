import { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Shop } from "../../context/ShopProvider";
import { useNavigate } from "react-router-dom";import './CartWidget.css'

const CartWidget = () => {   

    const {cart } = useContext(Shop)
/*     const [state ,setState] = useState(false)  
 */    const navigate = useNavigate()

    const redireccion = () => {
        navigate('/cart')
    }
    

    /* const viewManager = () => {

        if(state === false) {
            return(
                setState(true)
            )
        }else{
            setState(false)
        }
        console.log(state)
    } */
    return (        
        <>              
            <div className="container-icon-carrito">
                <HiOutlineShoppingCart className="CartIcon" onClick={redireccion}/>
                <span className={cart.length ? '' : 'off'}>                 
                    {cart.length}                
                </span>
            </div>                     
            
            {/* <div className={state ? 'cartOn' : 'cartOff'}>
                <div>
                    <span onClick={viewManager}> X </span>
                    <span>Cart Items</span>
                </div>
                <div className="container-aside-cart">
                    {cart.map((item) => {
                        return(
                            <div key={item.id}>
                                <div className="item-cart-aside"> 
                                    <img src={item.image} alt="" />
                                    <span>{item.title}</span>
                                    <span>${item.price}</span>                                    
                                    <span>{item.quantity}</span>                                
                                </div>                                
                            </div>
                        )                        
                    })}
                </div>
                <button className="finalizar-cart">Finalizar compra</button>
            </div> */}
        </>
        

    )
    
}

export default CartWidget;