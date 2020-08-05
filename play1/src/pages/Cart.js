import React, { Component } from 'react'
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
                    {this.props.cartItems.lenght <=0 && <p>购物车为空!</p>}
                    <ul>
                        {this.props.cartItems.map(cartItem=>(
                            <li key={cartItem.id}>
                                <div>
                                    <strong>{cartItem.title}</strong> - ${cartItem.price}(
                                    {cartItem.quantity})
                                </div>
                                <div>
                                    <button
                                        onClick = {this.props.removeProductFromCart.bind(
                                            this,
                                            cartItem.id
                                        )}I
                                    >
                                        从购物车移除
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartItem:state.cart,
        cartItemCount:state.cart.reduce((count,curItem)=>{
            return count + curItem.quantity;
        },0)
    };
};

const mapDispathToProps = dispatch => {
    return {
        removeProductFromCart:id => dispatch(removeProductFromCart(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(CartPage);
