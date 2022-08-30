import React, { Fragment } from "react";
import ItemCounts from "../itemCounts/ItemCounts";
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {

    const compra = (cantidad) => {
        alert(`Compra finalizada. ${cantidad} items añadidos al carrito`)
    }

    return(
        <Fragment>
            <h1>{greeting}</h1>
            <div className="container">                
                <ItemCounts stock={5} initial={1} onAdd={compra}/>
                <ItemCounts stock={5} initial={1} onAdd={compra}/>
                <ItemCounts stock={5} initial={1} onAdd={compra}/>
                <ItemCounts stock={5} initial={1} onAdd={compra}/>
                <ItemCounts stock={5} initial={1} onAdd={compra}/>
            </div>
            
        </Fragment>
    )
}

export default ItemListContainer;