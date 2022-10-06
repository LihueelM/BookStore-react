import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase/config";


const useFirebase = (categoryId) => {
    const [loading, setLoading] = useState(false)
    const [producto, setProducto] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        
        (async () => {
            try{
                setLoading(true)
                const q = categoryId ?
                    query(
                        collection(db, 'products'),
                        where('category', '==', categoryId)
                    )
                    :
                    query(collection(db, 'products'))

                const productsDB = []
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                    productsDB.push({id:doc.id , ...doc.data()})
                    setProducto(productsDB) 
                })
            }
            catch(error){   
                setError(error.message)
            }        
            setLoading(false)
        
        })()
        
    }, [categoryId])

    return[loading, producto, error]
}

export default useFirebase;