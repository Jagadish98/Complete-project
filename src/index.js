import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './redux/User/rootReducer';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/rootSaga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Provider store={store} >
      <App />
     </Provider>  
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
