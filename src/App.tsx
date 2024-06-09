import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Components/Css/Custom.css'
import './App.css';

import Navbar from './Components/Models/Landing/Navbar';
import Presentacion from './Components/Models/Landing/Presentacion';
import { Route } from 'react-router';

const App = () => {
  return (
    <>
      <Route>
        <Navbar/>
        <Presentacion/>
      </Route>
    </>
  );
}

export default App;
