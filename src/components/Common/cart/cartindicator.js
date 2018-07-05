import React from 'react';
import cart_icon from '../../../assets/images/shopping-bag.svg';
import close_icon from '../../../assets/images/close.svg';

const CartIcon = ({ cartIsActive }) => {
    console
  if(cartIsActive){
    return <img src={close_icon} className="icon"   style={{ minWidth: 20, paddingRight:4, marginLeft: 4, paddingTop:8 }}/>
  } else {
    return <img src={cart_icon} className="icon"   style={{ minWidth: 24, padding: 4}}/>
  }
}

const CartCount = ({ cart }) => {
    console.log(cart.length);
    if (cart && cart.length > 0) {
      return <span className="cart-count">{cart.length}</span>;
    } else {
      return null;
    }
  }

export default class CartIndicator extends React.PureComponent {
    render() {
        const { cart, onClick, cartIsActive} = this.props;
        return (
            <span className="cart-button" onClick={onClick}>
                <CartIcon cartIsActive={cartIsActive} />
                <CartCount cart={cart} />
            </span>
        );
    }
}