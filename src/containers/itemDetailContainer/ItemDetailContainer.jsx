import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/itemDetail/ItemDetail"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    console.log(detalle)

    const {productId} = useParams()

    useEffect(() => {
        const getDetalle = async () => {
            try {
                const respuesta = await fetch(`https://fakestoreapi.com/products/${productId}`)
                const data = await respuesta.json()
                setDetalle(data);
            } catch (error) {
                console.log(error)
            }
        }
        getDetalle();
    }, [productId] )


    return(
        <div className="main-container-detail">
            <ItemDetail producto={detalle} />
        </div>
        
    )
}

export default ItemDetailContainer;