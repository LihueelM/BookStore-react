import NavBar from './components/navBar/NavBar';
import './App.css';
import ItemListContainer from './components/containers/itemListContainer/ItemListContainer'; 
import ItemDetailContainer from './components/containers/itemDetailContainer/ItemDetailContainer';
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
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/detail' element={<ItemDetailContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    
  );
}
export default App;
