import "./ItemDetail.css"
import ItemCounts from "../itemCounts/ItemCounts";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const ItemDetail = ({producto}) => {

    const [qty , setQty] = useState(0);
    const navigate = useNavigate()
    const {addItem} = useContext(Shop)
    const [finalizar , setFinalizar] = useState(false)


    const compra = (quantity) => {
        setQty(quantity);
    }
    const productoToSave = {...producto , quantity:qty}
    
    const finalizarCompra = () => {
        const productoToSave = {...producto , quantity:qty}
        addItem(productoToSave)
        setFinalizar(!finalizar) 
        MySwal.fire({
            position:'top',
            icon:"success",
            title: <p>Producto agregado al carrito</p>,
            onOpen: () => {
              setTimeout(() => MySwal.clickConfirm(), 2500);
            }
        })       
        navigate('/inicio')
             
    }
    return(
        <>
            <div className="container-item-detail">
                {/* Container con informacion del producto y compra */}
                <div className="container-producto">
                    <h2 className="title">{producto.title}</h2>
                    <img className="img-detail" src={producto.image} alt="" />
                    <h5 className='price'>${producto.price}</h5>
                    <h5 className="stock-detail">Unidades disponibles: {producto.stock}</h5>
                </div>
                {/* Container con informacion extra del producto */}
                <div className="container-info">
                    {
                        qty ? (
                            <div className="finalizar-compra-container">                                
                                <ItemCounts stock={producto.stock} initial={1} onAdd={compra} />
                                <button className="finalizar-compra" onClick={finalizarCompra}> FINALIZAR COMPRA </button>
                            </div>                            
                        ) :
                        (
                            <div className="finalizar-compra-container">
                                <ItemCounts stock={producto.stock} initial={1} onAdd={compra} productoToSave={productoToSave}/>
                            </div>
                        )
                    }
                </div>               
            </div>
        </>
    )
    
}

export default ItemDetail;