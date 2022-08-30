import React, { Fragment, useState } from "react";
import './ItemCounts.css'
import Portada from '../../images/camino_01.webp'


const ItemCounts = ({stock ,  initial , onAdd}) => {

    const [count , setCount] = useState(initial);

    const addItem = () => {
        count < stock ? setCount(count+1) : alert('No hay mas items disponibles');
    }
    const decrementItem = () => {
        count > 1 ? setCount(count-1) : console.log('No hay stock')
    }

    return(
        <Fragment>
            <div className="container-item-counts">
                <img src={Portada} alt="" className="img-card"/>
                <p className="item-name">El camino de los reyes</p>
                <div className="container-btn">
                    <button className="btn-item-counts" onClick={decrementItem}>-</button>
                    <p className="amount-item">{count}</p>
                    <button className="btn-item-counts" onClick={addItem}>+</button>
                </div>  
                <button className="btn-carrito" onClick={() => onAdd(count)}>Agregar al carrito</button>              
            </div>
        </Fragment>
    )
}

export default ItemCounts;
