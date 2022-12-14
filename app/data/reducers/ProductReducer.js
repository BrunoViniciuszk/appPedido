import {PRODUCTS_RESPONSE, PRODUCTS_SELECT} from "../actions/ProductActions"

export const initialState = {
    
    productList:[],
    selectProduct: null
}

export const productReducer = (store = initialState, action) =>{

    switch (action.type) {
        case PRODUCTS_RESPONSE:
            
            return {...store, productList: action.value};
    
        case PRODUCTS_SELECT:

             return {...store, selectProduct: action.value}; 
            default: return store;
    }
}