import { useState , Fragment } from "react";
import './ItemCounts.css'

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
                <div className="container-btn">
                    <p className="amount-item">Cantidad: {count} unidad</p>
                    <button className="btn-item-counts" onClick={decrementItem}>-</button>
                    <button className="btn-item-counts" onClick={addItem}>+</button>
                </div>  
                <button className="btn-carrito" onClick={() => onAdd(count)}>Agregar al carrito</button>              
            </div>
        </Fragment>
    )
}

export default ItemCounts;