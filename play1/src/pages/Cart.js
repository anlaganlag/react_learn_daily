import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainNavigation from '../components/MainNavigation';
import { removeProductFromCart } from '../store/actions';
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
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
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
            <strong>總金額:</strong>
            {this.props.cartItems.reduce((totalSum,curItem)=> 
                totalSum+curItem.price*curItem.quantity
            ,0)}
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
    removeProductFromCart: id => dispatch(removeProductFromCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
