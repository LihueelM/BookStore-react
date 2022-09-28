import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/itemDetail/ItemDetail"
import {db} from "../../Firebase/config"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    console.log(detalle)

    const {productId} = useParams()

    useEffect(() => {
        const getDetalle = async () => {
            try {
                const docRef = doc(db , 'products' , productId)
                const docSnap = await getDoc(docRef)
                docSnap.exists ? setDetalle({id:docSnap.id , ...docSnap.data()})
                :
                console.log("No hay archivos")
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