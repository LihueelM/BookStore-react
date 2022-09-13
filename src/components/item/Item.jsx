import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "../item/Item.css"
const Item = ({item}) => {

    const navigate = useNavigate()

    const enlace = () =>{
        navigate(`/detail/${item.id}`)
    }

    return(
        <Fragment>
            <div className="container-card" onClick={enlace}>                
                <img className="img-card" src={item.image} alt={item.key} />                                
                <h2 className="title-card">{item.title}</h2>
                <p className="price-card">Price: ${item.price}</p>
            </div>
        </Fragment>
    )
}

export default Item;
