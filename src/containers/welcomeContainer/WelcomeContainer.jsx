import Triangulo from '../../images/libros-triangulo.png';
import './WelcomeContainer.css'

const WelcomeContainer = () => {
    
    return(
        <div className='welcome-container'>
            <div className='greetings'>
                <h2>DIMENSIONAL BOOK'S</h2>
                <h4>LIBERA TU IMAGINACION</h4>
            </div>
            <div className='triangulo'>
                <img src={Triangulo} alt="libros" />
            </div>
            <div className='quienes-somos'>
                <h5>
                    BIENVENIDO A DIMENSIONAL BOOKS. 
                    AQUI PODRAS ADQUIRIR TUS EDICIONES FAVORITAS TANTO EN FISICO COMO DIGITAL. CONOCENOS
                </h5>
            </div>
            <div className='fondo-imagen'>
            </div>           
        </div >
    )
}

export default WelcomeContainer;