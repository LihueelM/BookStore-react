import "./ItemDetail.css"
import ItemCounts from "../itemCounts/ItemCounts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({producto}) => {

    const [qty , setQty] = useState(0);
    const navigate = useNavigate()

    const compra = (quantity) => {
        setQty(quantity);
    }

    const finalizarCompra = () => {
        navigate('/cart')
    }

    console.log(qty);

    return(
        <>
            <div className="container-item-detail">
                <img className="img-detail" src={producto.image} alt="" />
                <div>
                    <h2 className="title-detail">{producto.title}</h2>
                    <h5 className="description-detail" >{producto.description}</h5>
                    <h5 className="price-detail">${producto.price}</h5>
                    {
                        qty ? (
                            <button onClick={finalizarCompra}> finalizar compra </button>
                        ) :
                        (
                            <ItemCounts stock={10} initial={1} onAdd={compra} />
                        )
                    }
                </div>
            </div>
        </>
    )
    
}

export default ItemDetail;