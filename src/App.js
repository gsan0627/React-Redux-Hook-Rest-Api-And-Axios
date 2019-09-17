import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';
// //<Provider store={store}>

//Componentes
import Header from './componentes/Header';
import Productos from './componentes/Productos';
import NuevoProducto from './componentes/NuevoProducto';
import EditarProducto from './componentes/EditarProducto';


function App() {
  return (
      <Router>   
        <Provider store={store}>
        <Header />                 
          <div className="container">
              <Switch>
                <Route exact path="/" component={Productos} />
                <Route exact path="/producto/nuevo" component={NuevoProducto} />
                <Route exact path="/producto/editar/:id" component={EditarProducto} />
              </Switch>
          </div> 
          </Provider>
      </Router>
      
  );
}

export default App;
