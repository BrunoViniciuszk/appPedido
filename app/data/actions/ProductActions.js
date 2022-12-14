export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_RESPONSE = 'PRODUCTS_RESPONSE';
export const PRODUCTS_SELECT = 'PRODUCTS_SELECT';

export const productsRequest = () => ({

    type: PRODUCTS_REQUEST
    
})

export const productsResponse = (value) => ({

    type: PRODUCTS_RESPONSE,
    value


})

export const productsSelect = (value) => ({

    type: PRODUCTS_SELECT,
    value
})