import {SET_REMOVEITEM , SEARCH_ITEM , FETCH_PRODUCTS_BEGIN , FETCH_PRODUCTS_SUCCESS , FETCH_PRODUCTS_FAILURE } from "./type";



const setSearchAction = (text) => {
    return{
        
        type : SEARCH_ITEM,
        payload : text
    }
}

const setRemoveAction = index => {
  return{
    type : SET_REMOVEITEM,
    payload : index
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






export const setRemoveItem = index => {
  
    return setRemoveAction (index)
}

export const setSearchItem = text => {

    return setSearchAction (text);
};

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
