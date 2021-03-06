import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardImg, CardFooter, Fade, CardBody, Badge, UncontrolledTooltip, Row, Col  } from 'reactstrap';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import CartItem from '../Common/cart/cart';
import QtyInput from '../Common/cart/QtyInput'

import { fetchCart, removeCartItem, updateCartItemQty, toggleCart, clearCartItems } from '../../actions/cartActions';
import PaypalButton from '../Products/PaypalButton';
import config from '../../config';

import {getFormValues, getFormSyncErrors} from 'redux-form';

import SweetAlert from 'sweetalert2-react';

const imageUrl = 'http://ts.ausgrads.academy/images/';

const CLIENT = {
    sandbox: config.paypal.sandbox
};
const ENV = 'sandbox';

class CheckoutSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showComplete: false };
    }

    componentDidMount() {
        window.addEventListener('popstate', () => {
            this.setState({ showComplete: false })
        });
    }
    
    componentWillUnmount() {
        window.removeEventListener('popstate', () => {
            this.setState({ showComplete: false })
        });
    }

    completed(order) {
        console.log(order);
        this.setState({ showComplete: true })
    }

    closeCompleted() {
        this.props.clearCart();
        this.setState({ showComplete: false });
        this.props.history.replace("/orders");
    }

    componentWillMount() {
        // close the cart 
        this.props.toggleCart(false);
    }

    updateQty = (pid, value) => {
        this.props.updateCartItemQty(pid, value);
    }

    render() {
        const { cart } = this.props;
       
        if (cart && cart.items.length > 0) {
            const qtyChanged = _.debounce((pid,qty) => { this.updateQty(pid,qty) }, 500);
            const products = cart.items.map(product =>
                <Row>
                    <Col xs="2">
                        <img width="100%" src={product.images.length > 0 ? `${imageUrl}${product.images[0].url}`: '' }/>
                    </Col>
                    <Col xs="8">
                        <p>{product.name}</p>
                        <p>
                            Qty: <QtyInput id={product.id} value={product.qty} changed={qtyChanged}/>
                        </p>
                    </Col>
                    <Col xs="2">
                        <p className="text-info">${product.totalPrice}</p>
                        <a className="button is-light is-small" onClick={() => this.props.removeCartItem(product.id)}>Remove</a>
                    </Col>
                    
                </Row>
            );
            return (
                <div>
                <SweetAlert
                    show={this.state.showComplete}
                    title="Checkout Complete"
                    text="Payment was processed successfully."
                    type="success"
                    onConfirm={() => {
                        this.closeCompleted();
                    }}
                />
                <Card style={{padding:"20px",margin: "25px"}}>
                    <CardTitle><h1 className="display-4">Order Summary</h1></CardTitle>
                    <CardBody>
                        {products}
                        <hr className="separator" />
                        <Row>
                            <Col xs="6">
                                <p className="lead ">Subtotal</p>
                            </Col>
                            <Col xs="6">
                                <p className="lead float-right">${cart.totalPrice}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <p className="lead">Shipping</p>
                            </Col>
                            <Col xs="6">
                                <p className="lead text-success float-right">FREE</p>
                            </Col>
                        </Row>
                        <hr className="separator" />
                        <Row>
                            <Col xs="6">
                                <p className="lead font-weight-bold">Grand Total</p>
                            </Col>
                            <Col xs="6">
                                <p className="lead float-right font-weight-bold">${cart.totalPrice}</p>
                            </Col>
                        </Row>
                        <Row>
                            {Object.keys(this.props.checkoutFormErrors).length ? <span></span> : 
                                <PaypalButton 
                                items={this.props.cart.items}
                                checkout={this.props.checkoutForm}
                                client={CLIENT}
                                env={ENV}
                                commit={true}
                                currency={'AUD'}
                                total={this.props.cart.totalPrice}
                                complete={this.completed.bind(this)}
                                />
                            }
                        </Row>
                    </CardBody>
                </Card>
                </div>
            )
        } 
        return (
            <Card style={{padding:"20px",margin: "25px"}}>
                <CardTitle>
                    <h1 className="display-4">Your cart is empty</h1>
                </CardTitle>
            </Card>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        cart: state.cart.cart,
        checkoutForm: getFormValues('CheckoutForm')(state),
        checkoutFormErrors: getFormSyncErrors('CheckoutForm')(state)
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        updateCartItemQty: (pid,qty) => dispatch(updateCartItemQty(pid,qty)),
        removeCartItem: (pid) => dispatch(removeCartItem(pid)),
        toggleCart: (isOpen) => dispatch(toggleCart(isOpen)),
        clearCart: () => dispatch(clearCartItems())
    };
};



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutSummary));