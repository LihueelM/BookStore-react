import React, { Fragment } from "react";
import './ItemListContainer.css'
import { products } from "../data/products";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({greeting}) => {
     
    const [items , setItems] = useState([])

    useEffect(() => {
        ( async () => {
            const obtenerProducto = new Promise ((accept, reject) => {
                setTimeout(() => {
                    accept(products)
                } , 3000);
            });
    
            try {
                const respuesta = await obtenerProducto;
                setItems(respuesta)
            } catch (error) {
                console.log(error)
            }
            console.log(items)
        })()       
    },[items])

    return(
        <Fragment>
            <h1>{greeting}</h1> 
             <div className="container">
                <ItemList items={items}/>          
             </div>
            
        </Fragment>
    )
    
}

export default ItemListContainer;