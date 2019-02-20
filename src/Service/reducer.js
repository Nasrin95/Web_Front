import { SET_ITEM , FETCH_PRODUCTS_BEGIN , FETCH_PRODUCTS_SUCCESS , FETCH_PRODUCTS_FAILURE} from "./type";


const initialState = {
  
    loading: false,
    error: null ,
    // id : 0 ,
    item : []
}



function reducer(state = initialState, action) {
    switch (action.type) {
        
        case SET_ITEM:
            return {
                ...state,
                
                item : [...state.item , { 'text': action.payload,  'id' : state.id }]
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
            item: action.payload
        };

        case FETCH_PRODUCTS_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
            item: []
        };
        default:
            return state;
    }

}

export default reducer