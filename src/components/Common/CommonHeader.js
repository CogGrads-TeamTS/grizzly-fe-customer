import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import GlobalSearch from './GlobalSearch';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
} from 'reactstrap';

import '../../App.css';
import isAuthenticated from '../../Auth/isAuthenticated'
import grizzlogo from '../../assets/griz-logo.png';
import { fetchUserByID } from '../../actions/userActions';
import Cart from '../Common/cart/cart';
import CartIndicator from '../Common/cart/cartindicator';
import { fetchCart, removeCartItem, toggleCart } from '../../actions/cartActions';
import Lock from '../../Auth/Lock';
import { withRouter } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            cartIsActive: false,
            grizzlyClass: "",
            toggleAuthModal: false,

        };

        this.toggle = this.toggle.bind(this);
        this.cartToggle = this.cartToggle.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        // Used to truncate long strings
        String.prototype.trunc =
            function (n, useWordBoundary) {
                if (this.length <= n) { return this; }
                var subString = this.substr(0, n - 1);
                return (useWordBoundary
                    ? subString.substr(0, subString.lastIndexOf(' '))
                    : subString) + " ...";
            };
    }

    componentDidMount() {
        this.props.fetchUserData();
        this.props.fetchCart(false);
    }

    cleanName = (name) => { // Get first name element
        return name.split(' ')[0];
    }

    callbackLogoUpdate(active) {
        if (active)
            this.setState({ grizzlyClass: " logo-active" })
        else
            this.setState({ grizzlyClass: "" })
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    // Used to delete a cart item
    deleteItem = (id) => {
        this.props.removeCartItem(id)
    }

    cartToggle = () => {
        this.setState({
            cartIsActive: !this.state.cartIsActive,
            mobileMenuIsActive: false
        });
        this.props.toggleCart(!this.props.cartIsActive);
        document.body.classList.toggle('noscroll');
    }

    onMouseLeaveHandler = () => {
        if (!this.props.isMobile && this.props.level === 1) {
            this.setState({
                isActive: false
            })
        }
    }

    handleAuthModalToggle = (bool) => {
        this.setState({
            toggleAuthModal: bool,
        })
    }


    render() {
        const { cart } = this.props;
        return (
            <Navbar light expand="md">
                <NavbarBrand href="/" className="navbar-brand-logo">
                        <img className={"griz-logo" + this.state.grizzlyClass} onClick={this.props.push} src={grizzlogo} />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="user-name-disp">
                            {
                                isAuthenticated() && (
                                    <NavLink className="welcome-name" disabled href="#">Welcome, {this.props.user !== undefined && this.cleanName(this.props.user.name)}!</NavLink>
                                )
                            }
                        </NavItem>
                        <NavItem>
                            <CartIndicator cart={cart} onClick={this.cartToggle} cartIsActive={this.props.cartIsActive} cartIsLoading={this.props.cartIsLoading} />
                            <div className={this.props.cartIsActive ? 'mini-cart-open' : ''}>
                                <Cart cart={cart} deleteCartItem={this.deleteItem} />
                            </div>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                {
                                    !isAuthenticated() && (
                                        <div className="header-btn-container">
                                            <Button className="navbar-button-generic" onClick={() => this.handleAuthModalToggle(true)}>Log In</Button>
                                        </div>
                                    )
                                }
                                {
                                    isAuthenticated() && (
                                        <div className="header-btn-container">
                                            <Link to="/logout">
                                                <Button className="navbar-button-generic">Log Out</Button>
                                            </Link>
                                        </div>
                                    )
                                }
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                {
                                    !isAuthenticated() && (
                                        <div className="header-btn-container">
                                            <Button className="navbar-button-generic" onClick={() => this.handleAuthModalToggle(true)}>Sign Up</Button>
                                        </div>
                                    )
                                }
                            </NavLink>
                        </NavItem>
                        <GlobalSearch logoCallback={this.callbackLogoUpdate.bind(this)} rounded="user-search-rounded" placeholder="Search" />
                    </Nav>
                </Collapse>
                    <Lock val={this.state.toggleAuthModal} handleAuthModalToggle={this.handleAuthModalToggle.bind(this)} location={this.props.location} />
            </Navbar >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        userIsLoading: state.userIsLoading,
        cart: state.cart.cart,
        cartIsActive: state.cart.cartIsActive,
        cartIsLoading: state.cartIsLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserData: () => dispatch(fetchUserByID()),
        fetchCart: (loggedIn) => dispatch(fetchCart(loggedIn)),
        removeCartItem: (pid) => dispatch(removeCartItem(pid)),
        toggleCart: (isOpen) => dispatch(toggleCart(isOpen))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));