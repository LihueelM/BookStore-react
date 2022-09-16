import "./ItemDetail.css"
import ItemCounts from "../itemCounts/ItemCounts";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";

const ItemDetail = ({producto}) => {

    const [qty , setQty] = useState(0);
    const navigate = useNavigate()
    const {addItem,clearCarrito,removeItem} = useContext(Shop)

    const compra = (quantity) => {
        setQty(quantity);
    }

    const finalizarCompra = () => {
        const productoToSave = {...producto , quantity:qty}
        addItem(productoToSave)
        navigate('/cart')
    }

    const limpiarCarrito = () => {
        clearCarrito()
    }
    const eliminarItem = () =>{
        removeItem(producto)
    }
    return(
        <>
            <div className="container-item-detail">
                <div className="container-image">
                  <img className="img-detail" src={producto.image} alt="" />
                </div>
                <div className="container-info">
                    <h2 className="title-detail">{producto.title}</h2>
                    <h5 className="price-detail">${producto.price} </h5>
                    <h5 className="description-detail" >{producto.description}</h5>
                </div>
                <div className="container-action">
                    {
                        qty ? (
                            <button onClick={finalizarCompra}> finalizar compra </button>
                        ) :
                        (
                            <ItemCounts stock={10} initial={1} onAdd={compra} />
                        )
                    }
                    <button onClick={limpiarCarrito}>Limpiar Carrito</button>
                    <button onClick={eliminarItem}>eliminar Item</button>
                </div>
                    
                
            </div>
        </>
    )
    
}

export default ItemDetail;