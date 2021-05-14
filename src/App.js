import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <Switch>
      <Route to='/'>
        <Header />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
