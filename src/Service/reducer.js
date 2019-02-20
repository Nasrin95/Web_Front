import { SET_REMOVEITEM , SEARCH_ITEM , FETCH_PRODUCTS_BEGIN , FETCH_PRODUCTS_SUCCESS , FETCH_PRODUCTS_FAILURE} from "./type";


const initialState = {
    result : [] ,
    loading: false,
    error: null ,
    // id : 0 ,
    item : []
}



function reducer(state = initialState, action) {
    switch (action.type) {
        
    

        case SET_REMOVEITEM:
            return {
                ...state,
                item : [
                    ...state.item.slice(0,action.payload),
                    ...state.item.slice(action.payload + 1 )
                ]
            };
        case FETCH_PRODUCTS_BEGIN:
                return {
                    ...state,
                    loading: true,
                    error: null
                };

        case FETCH_PRODUCTS_SUCCESS:
        
            return {
                
                ...state,
                loading: false,
                item: action.payload,
                result: action.payload
            };

        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                item: [],
                result: []
            };
        case SEARCH_ITEM:
            let filteredData = 
                state.item.filter(item => 
                    item.login.toUpperCase().includes(action.payload.toUpperCase())
                );
            return {
                ...state,
                result : [...filteredData]
            };
      
        default:
            return state;
    }

}

export default reducer