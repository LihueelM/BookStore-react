import { createContext, useState } from "react";

export const Shop = createContext(null)

const ShopProvider = ({children}) => {

    const [cart , setCart] = useState([]);

    const addItem = (item) => {
        
        const productoRepetido = isInCart(item.id)
        if(productoRepetido){
            const carritoModificado = cart.map(product => {
                if(product.id === item.id){
                    product.quantity = product.quantity += item.quantity
                    console.log(product.price)
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
    const total = () => {
        const precioFinal = cart.reduce((acc, producto) => acc += producto.quantity * producto.price ,0 ) 
        console.log(precioFinal)
        return precioFinal
    }
    const totalWidget = () => {
        const itemCart = cart.map((productos) => productos.quantity)
        const totalCart = itemCart.reduce((acc, i) => acc +i , 0)
        return totalCart
    }

    const removeItem = (item) => {
        const coincidencia = isInCart(item.id)
        if(coincidencia){
            const itemAEliminar = cart.filter(producto => producto !== item )
            setCart(itemAEliminar);    
        }
        else{
            console.log('No se encuentra el item en el carrito')
        }
    }
    

    return(
        <Shop.Provider value={{addItem,cart,clearCarrito,removeItem,total,totalWidget}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider;