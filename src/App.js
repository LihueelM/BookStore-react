import NavBar from './components/NavBar/navBar';
import './App.css';
import ItemListContainer from './components/containers/itemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={`turip turip ip ip turip ip. Se venden libro baratos y bonitos`} />
    </>
  );
}

export default App;
