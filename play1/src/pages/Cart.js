import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import { removeProductFromCart,removeAllProductFromCart,removeResetProductFromCart } from '../store/actions';
import './Cart.css';
class CartPage extends Component {
  render() {
    return (

      <React.Fragment>
        <MainNavigation cartItemNumber={this.props.cartItemCount} />
        <main className="cart">
          {this.props.cartItems.length <= 0 && <p>購物車已經清空!</p>}
          <ul>
            {this.props.cartItems.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - RMB {cartItem.price} (
                  {cartItem.quantity}件)
                </div>
                <div>
                  <button
                    onClick={this.props.removeProductFromCart.bind(
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
            {this.props.cartItems.reduce((totalSum,curItem)=> 
                totalSum+curItem.price*curItem.quantity
            ,0)}
            </strong>
            <button className="am" onClick={this.props.removeAllProductFromCart.bind(this)}> 一鍵清空購物車</button>
            
            <button  onClick={this.props.removeResetProductFromCart.bind(this)}> Reset</button>
          </p>

        </main>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    cartItems: state.cart,
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeProductFromCart: id => dispatch(removeProductFromCart(id)),
    removeAllProductFromCart: () => dispatch(removeAllProductFromCart()),
    removeResetProductFromCart: () => dispatch(removeResetProductFromCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
