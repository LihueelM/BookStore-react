import Triangulo from '../../images/libros-triangulo.png';
import './WelcomeContainer.css'
import Loader from '../../components/Loader/Loader';

import useFirebase from "../../hooks/useFirebase";
import { useNavigate } from 'react-router-dom';

const WelcomeContainer = () => {
    const navigate = useNavigate()
    const inicio = () => {
        navigate('/inicio')
    }
    const [loading] = useFirebase()

    return(
        <>
            {
                loading ? 
                <Loader />
                :
                <div className='welcome-container'>
                <div className='greetings'>
                    <h2>ENCONTRA LA AVENTURA QUE ESTAS NECESITANDO</h2>
                    <img src={Triangulo} alt="libros" className='triangulo' />
                </div>
                <div className='quienes-somos'>
                    <h5>
                        BIENVENIDO A DIMENSIONAL BOOKS. <br /> 
                        SOMOS UN GRUPO DE ENTUSIASTAS DE LA LECTURA, NUESTRO OBJETIVO ES QUE PUEDAS ENCONTRAR TU PASION POR LA LECTURA. ESTAS LISTO PARA LA AVENTURA?
                    </h5>
                    <button className='btn-comprar-ahora' onClick={inicio}>COMPRA AHORA</button>
                </div>          
            </div >
    
            }
        </>
    )
}

export default WelcomeContainer;