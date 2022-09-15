import NavBar from './components/navBar/NavBar';
import './App.css';
import ItemListContainer from './containers/itemListContainer/ItemListContainer'; 
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer'
import Cart from './containers/cartContainer/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:categoryId" element={<ItemListContainer />} />
        <Route path="detail/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={ <Cart /> }/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}
export default App;
