import { useContext, useState } from 'react';
import './Formulario.css'
import {Shop} from '../../context/ShopProvider'
import NewOrder from '../../services/newOrder'
import { db } from '../../firebase/config';
import useFirebase from "../../hooks/useFirebase";

import { collection, addDoc, getDoc ,doc, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);



const Formulario = () => {
   const {cart,total,clearCarrito} = useContext(Shop)
   const precioFinal = total()
   const navigate = useNavigate()
   const [loading] = useFirebase()
   
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

    const docRef = await addDoc(collection(db, "orders"), orden)  
    MySwal.fire({
        position:'top',
        icon:'success',
        title: <p>La compra se a finalizado.</p>,
        text: "Recibira un correo electronico con la informacion del pedido",
        footer:`Orden de compra: ${docRef.id}`
        }) 

    cart.forEach( async (productoOrden) => {
        const productoRef = doc(db, "products" , productoOrden.id)
        const docSnap = await getDoc(productoRef)

        await updateDoc(productoRef, {
            stock: docSnap.data().stock - productoOrden.quantity
        })
        
    });
    setDatos({})
    clearCarrito() 
    navigate('/')
   }   

   return(
    <>{
        loading ? 
        <Loader />
        :
        <div className='formulario'>
            <h2>COMPLETE LOS DATOS DE ENVIO.    </h2>
            <h5>ESTOS DATOS SON NECESARIOS PARA REALIZAR EL ENVIO DE FORMA CORRECTA.</h5>
            <form onSubmit={guardarDatos}>
                <input type="text" placeholder='Nombre' name='name' onChange={capturarDatos} required/>
                <input type="email" placeholder='Direccion E-mail' name='email' onChange={capturarDatos} required/>
                <input type="text" placeholder='Direccion de entrega' name='address' onChange={capturarDatos} required/>
                <input type="number" placeholder='Telefono' name='phone' onChange={capturarDatos} required/>
                <button className='enviar-datos-form'>Finalizar compra</button>
            </form>
        </div>
        
    }
        
    </>
   )
}

export default Formulario;