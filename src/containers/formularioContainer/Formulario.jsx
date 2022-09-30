import { useContext, useState } from 'react';
import './Formulario.css'
import {Shop} from '../../context/ShopProvider'
import NewOrder from '../../services/newOrder'
import { db } from '../../Firebase/config';

import { collection, addDoc, getDoc ,doc, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const Formulario = () => {
   const {cart,total,clearCarrito} = useContext(Shop)
   const precioFinal = total()
   const navigate = useNavigate()
   
   const [datos, setDatos] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    items: cart,
    total:precioFinal
   })   

   const capturarDatos = (e) => {
    setDatos({...datos ,[e.target.name] : e.target.value})
   }  

   const guardarDatos =  async (e) => {
    e.preventDefault()
    const orden = NewOrder(datos.name, datos.email,datos.address,datos.phone,datos.items,datos.total)
    console.log(orden)

    const docRef = await addDoc(collection(db, "orders"), orden)
    alert(`La operacion se realizo con exito. Numero de compra: ${docRef.id}`) 

    cart.forEach( async (productoOrden) => {
        const productoRef = doc(db, "products" , productoOrden.id)
        const docSnap = await getDoc(productoRef)

        await updateDoc(productoRef, {
            stock: docSnap.data().stock - productoOrden.quantity
        })
        
    });
    setDatos({})
    clearCarrito()
    alert('Se realizo la compra correctamente')
    navigate('/')
   }   

   return(
    <>
        <form onSubmit={guardarDatos}>
            <input type="text" placeholder='Nombre' name='name' onChange={capturarDatos} />
            <input type="email" placeholder='Direccion E-mail' name='email' onChange={capturarDatos}/>
            <input type="text" placeholder='Direccion de entrega' name='address' onChange={capturarDatos}/>
            <input type="number" placeholder='Telefono' name='phone' onChange={capturarDatos}/>
            <button>Finalizar compra</button>
        </form>
    </>
   )
}

export default Formulario;