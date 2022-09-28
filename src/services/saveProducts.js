import { addDoc , collection } from "firebase/firestore";
import { db } from "../Firebase/config";

const updateProducts = async () => {

    try {

        const response = await fetch('/items/data.json')
        const newProducts = await response.json()

        newProducts.forEach(async (product) => {
            const docRef = await addDoc(collection(db, "products"), {
                title: product.title,
                category: product.category,
                price: product.price,
                image: product.image,
                stock: product.stock
            })
            console.log(docRef.id)
        })
        
    } catch (error) {
        console.log(error)
    }    
}

export default updateProducts;