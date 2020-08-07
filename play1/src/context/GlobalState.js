import React, {  useReducer } from 'react';

import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT,REMOVE_ALL_PRODUCT,RESET_PRODUCT } from './reducers';

const GlobalState = props => {
  const products = [
    { id: 'p1', title: '電子競技鼠標', price: 29.99 },
    { id: 'p2', title: '哈利波特 III', price: 9.99 },
    { id: 'p3', title: '用過的塑料瓶', price: 0.99 },
    { id: 'p4', title: '半死不活的植物', price: 2.99 }
  ];
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => 
    setTimeout(() => 
      dispatch({ type: ADD_PRODUCT, product: product })
      , 0
    )
  

  const removeProductFromCart = productId => 
    setTimeout(() => 
      dispatch({ type: REMOVE_PRODUCT, productId: productId })
      ,0
    )
  
  const removeAllProductFromCart = () =>
    setTimeout(()=> 
      dispatch({ type:REMOVE_ALL_PRODUCT })
      ,0
    )

  const resetProductFromCart = () =>
    setTimeout(()=> 
      dispatch({ type:RESET_PRODUCT })
      ,0
    )


  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        removeAllProductFromCart:removeAllProductFromCart,
        resetProductFromCart:resetProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;