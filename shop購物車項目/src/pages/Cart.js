import React, { useContext,useEffect } from 'react';
import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Cart.css';

const CartPage = props => {
  const context = useContext(ShopContext);


    return (
      <React.Fragment>
        <MainNavigation i
          cartItemNumber={context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
        <main className="cart">
          {context.cart.length <= 0 && <p>購物車已經清空!</p>}
          <ul>
            {context.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - RMB {cartItem.price} (
                  {cartItem.quantity}件)
                </div>
                <div>
                  <button
                    onClick={context.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    從購物車中清除
                  </button>
                </div>
              </li>
            ))}
          </ul>
            <p>
            <strong className="am">總金額:
            {Math.round(context.cart.reduce((totalSum,curItem)=> 
                totalSum+curItem.price*curItem.quantity
            ,0)*100)/100
            }
            </strong>
       
            <button className="am" onClick={context.removeAllProductFromCart.bind(this)}> 一鍵清空購物車</button>
            
          </p>

        </main>
      </React.Fragment>
    );
  }



export default CartPage;