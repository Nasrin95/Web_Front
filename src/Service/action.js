import { SET_ITEM , FETCH_PRODUCTS_BEGIN , FETCH_PRODUCTS_SUCCESS , FETCH_PRODUCTS_FAILURE } from "./type";
// import {store} from '../page/App1'


const setItemAction = (text) => {
    return{
        type : SET_ITEM,
        payload : text
    }
}


 const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });

  const fetchProductsSuccess = products => {
      return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload:  products 
      }
  }
  
 
   const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload:  error 
  });



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






export const  setItem = text => {
    return setItemAction(text);
} ;

export const fetchProducts = () => {
    
    return dispatch => {
        
      dispatch(fetchProductsBegin());
      fetch("https://api.github.com/users")
        .then(data =>  data.json())
        .then(data => {
          dispatch(fetchProductsSuccess(data));
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
