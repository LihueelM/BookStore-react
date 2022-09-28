import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/itemList/ItemList"
import { collection, query, getDocs, where } from "firebase/firestore";
import {db} from "../../Firebase/config"

import "../itemListContainer/ItemListContainer.css"

const ItemListContainer = () => {

    const [producto, setProducto] = useState([])
    const {categoryId} = useParams()
    console.log(categoryId)
    useEffect(() => {
        
        const getProductos = async () => {
            try{
                if(categoryId){
                    const q = query(collection(db, "products"), where("category" , "==" , categoryId));
                    const productsDB = [];
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        productsDB.push({id: doc.id , ...doc.data()})
                        console.log(productsDB)   
                        setProducto(productsDB)                
                    });
    
                }else{
                    const q = query(collection(db, "products"));
                    const productsDB = [];
                    const querySnapshot = await getDocs(q);
                    querySnapshot.forEach((doc) => {
                        productsDB.push({id: doc.id , ...doc.data()})
                        console.log(productsDB)   
                        setProducto(productsDB)                
                    });
                }
            }
            catch(error){   
                console.log(error)
            }        
        
        }
        getProductos()
    }, [categoryId])
    return(
        <>  
          
            <div className="main-container">                
                <ItemList producto={producto}/>
            </div>
        </>
    )
}

export default ItemListContainer;