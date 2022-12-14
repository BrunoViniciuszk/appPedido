import React, {createContext, useReducer} from "react";
import {initialState, productReducer} from '../../data/reducers/ProductReducer'

export const ProductContext = createContext(initialState);

export default function ProductProvider(props){

    const [productState, productDispatch] =  useReducer(productReducer, initialState)

    return (
        <ProductContext.Provider value = {[productState, productDispatch]}>

            {props.children}

        </ProductContext.Provider>
    )

}