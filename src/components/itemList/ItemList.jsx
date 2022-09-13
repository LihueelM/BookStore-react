import Item from "../item/Item"
import { Fragment } from "react"

const ItemList = ({producto}) =>{

    return(
        <Fragment>
            {
                producto.map(item => {
                    return(
                        <Item key={item.id} item={item}/>
                    )
                })
            }
        </Fragment>
    )
        
}

export default ItemList;