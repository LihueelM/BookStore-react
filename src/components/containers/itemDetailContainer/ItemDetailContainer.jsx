import { useEffect, useState } from "react";
import ItemDetail from "../../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const[product, setProduct] = useState([])   

    useEffect(() => {
        let key = 'AIzaSyAmDvELgAGpC-xusIoijDlZDP1gHMT5pCA'
        let keyWord = 'brandonsanderson'
        const getInfo = async () => {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyWord}By=newest&key=${key}&maxResults=1`)
            const data = await response.json();
            setProduct(data.items)
        }
        getInfo()
        
    } , [])
            
    return (
        product.length&& <ItemDetail items={product}/>
    )
   
    }   

export default ItemDetailContainer;