import { useState , Fragment } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import './ItemCounts.css'

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const ItemCounts = ({stock ,  initial , onAdd}) => {

    const MySwal = withReactContent(Swal);
    const [count , setCount] = useState(initial);
    
    const addItem = () => {
        count < stock ? setCount(count+1) 
        :
        MySwal.fire({
            icon: 'warning',
            position:'top',
            title: <p>No hay mas productos en stock</p>,
            onOpen: () => {
              setTimeout(() => MySwal.clickConfirm(), 2500);
            }
        })  ;
    }
    const decrementItem = () => {
        count > 1 ? setCount(count-1) : console.log('No hay stock')
    }

    return(
        <Fragment>
            <div className="container-item-counts">
                <p className="amount-item">UNIDADES SELECCIONADAS: {count}</p>
                <div className="container-btn">          
                    <i onClick={addItem}><HiPlusCircle className="i-btn"/></i>          
                    <i onClick={decrementItem}><HiMinusCircle className="i-btn" /></i>
                </div>  
                <button className="btn-carrito" onClick={() => onAdd(count)}>ACEPTAR</button>              
            </div>
        </Fragment>
    )
}

export default ItemCounts;