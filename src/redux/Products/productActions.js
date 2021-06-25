import {handleFetchProducts} from './productHelper';

export const productsTypes = {
      FETCH_PRODUCT_START : 'FETCH_PRODUCT_START',
      SET_PRODUCT : 'SET_PRODUCT',
      SET_SEARCHDATA : 'SET_SEARCHDATA'
}

export const fetchProductStart = () => async dispatch => {
      try{
            console.log('is called')
      const products = await handleFetchProducts();
      dispatch({
            type : productsTypes.SET_PRODUCT,
            payload : products
      })
    }catch(err){
       console.log(err)
    }
} 

export const setProducts = products => {
      console.log("setProducts is executed", products)
return {
      type : productsTypes.SET_PRODUCT,
      payload : products
}}

export const setSearchData = data => ({
      type : productsTypes.SET_SEARCHDATA,
      payload : data
})


