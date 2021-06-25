import {combineReducers} from 'redux';
import {userReducer} from './userReducers';
import productReducers from '../Products/productReducres'

export default combineReducers ({
      user : userReducer,
      productData : productReducers
}); 
