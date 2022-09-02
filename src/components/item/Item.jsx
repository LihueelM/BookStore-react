import { Fragment } from "react";
import './Item.css'
import { useState } from "react";

const Item = ({item, onAdd}) => {

    const [count , setCount] = useState(1);

    const addItem = () => {
        count < item.stock ? setCount(count+1) : alert('No hay mas items disponibles');
    }
    const decrementItem = () => {
        count > 1 ? setCount(count-1) : console.log('No hay stock')
    }

    return(
        <Fragment>
           <div className="container-item-counts">
                <img src={`${item.url}`} alt="" className="img-card"/>
                <p className="item-name">{item.name}</p>
                <p>{`Precio:${item.price}`}</p>
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

export default Item;