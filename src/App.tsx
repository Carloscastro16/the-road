import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Components/Css/Custom.css'
import './App.css';

import Navbar from './Components/Models/Navbar';
import Presentacion from './Components/Models/Landing/Presentacion';

const App = () => {
  return (
    <>
      <Navbar/>
      <Presentacion/>
    </>
  );
}

export default App;
