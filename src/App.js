import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import {Switch,Route} from 'react-router-dom'
import Details from './components/Details';
import Massonry from './components/Massonry';
import Cart from './components/CartContainer/Cart';
import Default from './components/Default';
function App() {
  return (
    <React.Fragment>
    <NavBar></NavBar>
    <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route path="/details" component={Details}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/cart3" component={Cart}/>
      <Route path="/massonry" component={Massonry}/>
      <Route  component={Default}/>      
    </Switch>  
    </React.Fragment>
  );
} 

export default App;
