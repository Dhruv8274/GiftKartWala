import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Onecard from './Component/Onecard';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Main/>
    <Onecard/>
    </BrowserRouter>
    </>
  );
}

export default App;
