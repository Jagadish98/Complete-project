import {productsTypes} from './productActions'

const INITIAL_STATE = {
      products: [],
      searchData: []
}

const productReducers = (state=INITIAL_STATE, action) => {
      switch(action.type){
            case productsTypes.SET_PRODUCT:
               return {
                     ...state,
                     products: action.payload,
                     searchData: action.payload
               }   
            case productsTypes.SET_SEARCHDATA:
                  return {
                        ...state,
                        searchData: action.payload
                  }
            default:
               return state;
      }
}

export default productReducers