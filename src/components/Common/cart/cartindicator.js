import React from 'react';
import cart_icon from '../../../assets/images/shopping-bag.svg';
import cart_close_icon from '../../../assets/images/close.svg';
import './cart.css';


const CartIcon = ({ cartIsActive }) => {
  if (cartIsActive) {
    return <img src={cart_close_icon} className="icon" />
  } else {
    return <img src={cart_icon} className="icon" />
  }
}

const CartCount = ({ cart, cartIsLoading }) => {
  if (cartIsLoading)
    return <div className="lds-css ng-scope">
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  else
    if (cart && cart.items.length > 0) {
      return <span className="cart-count">{cart.items.length}</span>;
    } else {
      return null;
    }
}

export default class CartIndicator extends React.PureComponent {
  render() {
    const { cart, onClick, cartIsActive, cartIsLoading } = this.props;
    return (
      <div className="cart-button" onClick={onClick}>
        <CartIcon cartIsActive={cartIsActive} />
        <CartCount cart={cart} cartIsLoading={cartIsLoading} />
      </div>
    );
  }
}