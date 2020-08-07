import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART,REMOVE_ALL_PRODUCT_FROM_CART,REMOVE_RESET_PRODUCT_FROM_CART } from './actions';

const initialState = {
  products: [
    { id: 'p1', title: '遊戲鼠標', price: 29.99 },
    { id: 'p2', title: '哈利波特 3', price: 9.99 },
    { id: 'p3', title: '廢棄塑料瓶', price: 0.99 },
    { id: 'p4', title: '快幹死盆栽', price: 2.99 }
  ],
  cart: [
    {id: "p2", title: "哈利波特 3", price: 9.99, quantity: 3},
    {id: "p3", title: "廢棄塑料瓶", price: 0.99, quantity: 3},
    {id: "p4", title: "快幹死盆栽", price: 2.99, quantity: 2},
    {id: "p1", title: "遊戲鼠標", price: 29.99, quantity: 3}
  ],
  cartSum: 0
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload.id
      );

      if (updatedItemIndex ===-1) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };


        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
    case REMOVE_ALL_PRODUCT_FROM_CART:
      return { ...state, cart: [] };

    case REMOVE_RESET_PRODUCT_FROM_CART:
      return { ...state, cart: initialState.cart };
    default:
      return state;
  }
};

export default shopReducer;
