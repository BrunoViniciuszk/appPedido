export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT'
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT'
export const CART_CLEAR = 'CART_CLEAR'
export const CART_SHOP_REQUEST = 'CART_SHOP_REQUEST'

export const cartAddProduct = (value) => ({
    
    type: CART_ADD_PRODUCT
})

export const cartRemoveProduct = (value) => ({

    type: CART_REMOVE_PRODUCT
})

export const cartClear = () => ({

    type: CART_CLEAR
})

export const cartShopRequest = () => ({

    type: CART_SHOP_REQUEST
})
