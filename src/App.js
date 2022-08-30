import NavBar from './components/navBar/NavBar';
import './App.css';
import ItemListContainer from './components/containers/ItemListContainer';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
        <NavBar />
        <ItemListContainer greeting={`turip turip ip ip turip ip. Se venden libro baratos y bonitos`} />
    </Fragment>
  );
}
export default App;
