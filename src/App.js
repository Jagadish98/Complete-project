import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <Switch>
      <Route to='/'>
        <Header />
        <Home />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
