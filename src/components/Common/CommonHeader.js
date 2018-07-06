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
import { fetchCart } from '../../actions/cartActions';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            cartIsActive: false,
            grizzlyClass: ""

        };
        this.toggle = this.toggle.bind(this);
        this.cartToggle = this.cartToggle.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

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

    deleteItem = (e) => {
        console.log("DELETEd " + e);
    }

    cartToggle = () => {
        console.log("TEST");
        console.log(!this.state.cartIsActive);
        this.setState({
            cartIsActive: !this.state.cartIsActive,
            mobileMenuIsActive: false
        });
        document.body.classList.toggle('noscroll');
    }

    onMouseLeaveHandler = () => {
        if (!this.props.isMobile && this.props.level === 1) {
            this.setState({
                isActive: false
            })
        }
    }


    render() {
        const { cart } = this.props;
        return (
            <div>
                <div style={{ width: "100%" }}>
                    <NavbarBrand><Link to="/"><img className={"griz-logo" + this.state.grizzlyClass} src={grizzlogo} /></Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </div>

            </div>
            // <Navbar light expand="md">
            //     
            //     <div>
            //         <Collapse isOpen={this.state.isOpen} navbar>
            //             <Nav className="ml-auto" navbar>
            //                 <GlobalSearch classname="global-search-user" logoCallback={this.callbackLogoUpdate.bind(this)} rounded="user-search-rounded" placeholder="Search" />
            //                 <NavItem className="user-name-disp">
            //                     {
            //                         isAuthenticated() && (
            //                             <NavLink className="welcome-name" disabled href="#">Welcome, {this.props.user !== undefined && this.props.user.name.trunc(10, true)}!</NavLink>
            //                         )
            //                     }
            //                 </NavItem>
            //                 {console.log(cart)}
            //                 <CartIndicator cart={cart} onClick={this.cartToggle} cartIsActive={this.state.cartIsActive} />
            //                 <div className={this.state.cartIsActive ? 'mini-cart-open' : ''}>
            //                     <Cart cart={cart} deleteCartItem={this.deleteItem} />
            //                 </div>
            //                 <NavItem>
            //                     <NavLink href="#">
            //                         {
            //                             !isAuthenticated() && (
            //                                 <Link to="/login">
            //                                     <Button
            //                                         id="btn-rounded"
            //                                         className="login-button"
            //                                     >
            //                                         Log In
            //                                     </Button>
            //                                 </Link>
            //                             )
            //                         }
            //                         {
            //                             isAuthenticated() && (
            //                                 <Link to="/logout">
            //                                     <Button
            //                                         id="btn-rounded"
            //                                         className="signup-button"
            //                                     >
            //                                         Log Out
            //                                     </Button>
            //                                 </Link>
            //                             )
            //                         }
            //                     </NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink href="#">
            //                         {
            //                             !isAuthenticated() && (
            //                                 <Link to="/login">
            //                                     <Button
            //                                         className="signup-button"
            //                                         id="btn-rounded"
            //                                     >
            //                                         Signup
            //                                     </Button>
            //                                 </Link>
            //                             )
            //                         }
            //                     </NavLink>
            //                 </NavItem>
            //             </Nav>
            //         </Collapse>
            //     </div>
            // </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        userIsLoading: state.userIsLoading,
        cart: state.cart.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserData: () => dispatch(fetchUserByID()),
        fetchCart: (loggedIn) => dispatch(fetchCart(loggedIn))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);