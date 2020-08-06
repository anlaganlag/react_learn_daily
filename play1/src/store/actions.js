
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODCUT_FROM_CART';



export const addProductToCart = product =>
    dispatch =>
        setTimeout(
            () => dispatch({
                type:ADD_PRODUCT_TO_CART,
                payload:product
            }) ,0)

        





export const removeProductFromCart = productId =>
    dispatch =>
        setTimeout(
            ()=> dispatch({
                type:REMOVE_PRODUCT_FROM_CART,
                payload:productId
            })
        ,0)
    

