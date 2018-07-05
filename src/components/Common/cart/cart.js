import React from 'react';
import {NavLink} from 'react-router-dom';
import avatar from '../../../assets/griz-head.png'


const CartItem = ({product}) => {
    const urlpath = `/product/${product.id}`;
  
    return (
        <div className="columns is-mobile">
        <div className="column is-2">
          <div className="image">
            <NavLink to={urlpath}><img src={avatar} /></NavLink>
          </div>
        </div>
        <div className="column">
          <div><NavLink to={urlpath}>{product.name}</NavLink></div>
            <div className="cart-option-name">{product.price}</div>          
          <div className="cart-quantity">Qty: {product.qty}</div>
        </div>
        <div className="column is-4 has-text-right">
          <div className="mini-cart-item-price">{product.price}</div>
          <a className="button is-light is-small" >Remove</a>
          {/* <a className="button is-light is-small" onClick={() => deleteCartItem(product.id)}>Remove</a> */}
        </div>
      </div>
    );
  }

export default class Cart extends React.PureComponent {
    render() {
        const {cart} = this.props;
        console.log(cart);
        if(cart && cart.items.length > 0) {
            let products = cart.items.map(product =>
                <CartItem key={product.id} product={product} />
            );

            return (
                <div className="mini-cart">
                    {products}
                <hr className="separator" />
                <div className="columns is-mobile is-gapless">
                    <div className="column is-7"><b>Subtotal</b></div>
                    <div className="column is-5 has-text-right">
                    {/* <b>{helper.formatCurrency(cart.subtotal, settings)}</b> */}
                    <b>$100.00</b>
                    </div>
                </div>
                {/* <NavLink className="button is-primary is-fullwidth has-text-centered" style={{ textTransform: 'uppercase' }} to="/checkout" onClick={cartToggle}>{text.proceedToCheckout}</NavLink> */}
                <NavLink className="button is-primary is-fullwidth has-text-centered" style={{ textTransform: 'uppercase' }} to="/checkout">GO TO CHECKOUT</NavLink>
                </div>
            )
        }else {
        return (
            <div className="mini-cart"><p>Your cart is empty</p></div>
        )
    }
    }
}