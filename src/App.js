import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Product from './Product/Product';
import ProductViewer from './ProductViewer/ProductViewer';
import Checkout from './Checkout/Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
  <div>
    <Switch>
       <Route exact path='/product'>
         <Header />
        <ProductViewer />
      </Route>
       <Route exact path='/checkout'>
        <Checkout />        
      </Route>
      <Route exact path='/'>
        <Header />
        <Home />
        <Product />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
