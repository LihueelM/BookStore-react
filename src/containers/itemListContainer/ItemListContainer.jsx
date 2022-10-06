import { useParams } from "react-router-dom";
import ItemList from "../../components/itemList/ItemList"
import useFirebase from "../../hooks/useFirebase";
import Loader from "../../components/Loader/Loader";

import "../itemListContainer/ItemListContainer.css"

const ItemListContainer = () => {

    const {categoryId} = useParams()
    const[loading, producto, error] = useFirebase(categoryId)    
    let categoria = categoryId
    categoria = categoryId ? categoryId : categoria = 'TODOS LOS LIBROS'
    console.log(categoria)
    return(
        <>
            {
                loading ?                 
                <Loader />
                :
                <>
                    <h2 className='title-category'>{categoria}</h2>
                    <div className="main-container"> 
                        <ItemList producto={producto}/>                    
                    </div>            
                </>
                
            }
            {
                error && <h2>{error}</h2>
            }      
        </>
    )
}
export default ItemListContainer;