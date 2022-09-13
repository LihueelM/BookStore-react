import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/itemList/ItemList"
import "../itemListContainer/ItemListContainer.css"
import Banner from "../../components/banner/Banner"
const ItemListContainer = () => {

    const [producto, setProducto] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        
        const getProductos = async () => {
            const urlDefault = 'https://fakestoreapi.com/products';
            const urlCategories = `https://fakestoreapi.com/products/category/${categoryId}`

            if(categoryId){
                const response = await fetch(urlCategories)
                const data = await response.json()
                setProducto(data)
            }else{
                const response = await fetch(urlDefault)
                const data = await response.json()
                setProducto(data)
            }
        }
        getProductos()
    }, [categoryId])
    return(
        <>  
            <div className="banner-container">
                <Banner />
            </div>            
            <div className="main-container">                
                <ItemList producto={producto}/>
            </div>
        </>
    )
}

export default ItemListContainer;