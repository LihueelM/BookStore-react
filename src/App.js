import NavBar from './components/navBar/NavBar';
import './App.css';
import ItemListContainer from './containers/itemListContainer/ItemListContainer'; 
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer'
import Cart from './containers/cartContainer/Cart';
import WelcomeContainer from './containers/welcomeContainer/WelcomeContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import NotFound from './components/notFound/NotFound';
import ShopProvider from './context/ShopProvider';
import Formulario from './containers/formularioContainer/Formulario';
/* import { useEffect } from 'react';
import updateProducts from './services/saveProducts';
 */
function App() {
  //Se encuentra desactivado ya que por cada vez que se ejecuta crea un nuevo array
  /* useEffect( ()=> {
    updateProducts()
  }, []) */

  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomeContainer />} />
          <Route path="category/:categoryId" element={<ItemListContainer />} />
          <Route path="detail/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={ <Cart /> }/>
          <Route path="*" element={<NotFound />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </BrowserRouter>      
    </ShopProvider>
  );
}
export default App;
