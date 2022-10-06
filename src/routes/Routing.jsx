import NavBar from '../components/navBar/NavBar';
import ItemListContainer from '../containers/itemListContainer/ItemListContainer'; 
import ItemDetailContainer from '../containers/itemDetailContainer/ItemDetailContainer'
import Cart from '../containers/cartContainer/Cart';
import WelcomeContainer from '../containers/welcomeContainer/WelcomeContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 


import NotFound from '../components/notFound/NotFound';
import Footer from '../components/footer/Footer';


const Routing = () => {


     return(
        <BrowserRouter>
            <NavBar />
                <Routes>                    
                    <Route path="/" element={<WelcomeContainer />} />
                    <Route path="inicio" element={<ItemListContainer />} />
                    <Route path="category/:categoryId" element={<ItemListContainer />} />
                    <Route path="detail/:productId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={ <Cart /> }/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
      </BrowserRouter>      

     )
}

export default Routing;