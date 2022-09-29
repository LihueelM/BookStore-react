import "./ItemDetail.css"
import ItemCounts from "../itemCounts/ItemCounts";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";

const ItemDetail = ({producto}) => {

    const [qty , setQty] = useState(0);
    const navigate = useNavigate()
    const {addItem} = useContext(Shop)
    const [finalizar , setFinalizar] = useState(false)

    const compra = (quantity) => {
        setQty(quantity);
    }

    const finalizarCompra = () => {
        const productoToSave = {...producto , quantity:qty}
        addItem(productoToSave)
        setFinalizar(!finalizar)
        navigate('/cart')
    }
    return(
        <>
            <div className="container-item-detail">
                {/* Container con informacion del producto y compra */}
                <div className="container-producto">
                    <img className="img-detail" src={producto.image} alt="" />
                </div>
                {/* Container con informacion extra del producto */}
                <div className="container-info">
                    {
                        qty ? (
                            <div className="finalizar-compra-container">
                                <h2 className="title">{producto.title}</h2>
                                <h5 className='price'>${producto.price}</h5>
                                <ItemCounts stock={10} initial={1} onAdd={compra} />
                                <button className="finalizar-compra" onClick={finalizarCompra}> FINALIZAR COMPRA </button>
                            </div>
                            
                        ) :
                        (
                            <div className="finalizar-compra-container">
                                <h2 className="title">{producto.title}</h2>
                                <h5 className='price'>${producto.price}</h5>
                                <ItemCounts stock={10} initial={1} onAdd={compra} />
                            </div>
                        )
                    }
                </div>                   
                
            </div>
        </>
    )
    
}

export default ItemDetail;