import { createContext, useState } from "react";

export const Shop = createContext(null)

const ShopProvider = ({children}) => {

    const [cart , setCart] = useState([]);

    const addItem = (item) => {
        
        const productoRepetido = isInCart(item.id)
        if(productoRepetido){
            const carritoModificado = cart.map(product => {
                if(product.id === item.id){
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
            console.log(carritoModificado)
        }else{
            const nuevoCarrito = [...cart, item]
            setCart(nuevoCarrito)
        } 
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)};
    
    const clearCarrito = () => {
        const nuevoCarrito = []
        setCart(nuevoCarrito)     
        
    }

    const removeItem = (item) => {
        const coincidencia = isInCart(item.id)
        if(coincidencia){
            const itemAEliminar = cart.find(product => product.id === item.id)
            const index = cart.indexOf(itemAEliminar)
            cart.splice(index,1)
            console.log(cart)        
        }
        else{
            console.log('No se encuentra el item en el carrito')
        }
    }
    

    return(
        <Shop.Provider value={{addItem,cart,clearCarrito,removeItem}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;