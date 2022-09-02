import { Fragment } from "react"
import Item from "../item/Item"

const compra = (cantidad) => {
    alert(`Compra finalizada. ${cantidad} items añadidos al carrito`)
}

const ItemList = ({items}) => {
    return(
        <Fragment>
            {items.map(item => {
                return <Item key={item.id} item ={item} onAdd={compra}/>
            })}
        </Fragment>
    )
}

export default ItemList;