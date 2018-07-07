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


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
          cartIsActive: false
        };
        this.toggle = this.toggle.bind(this);
        this.cartToggle = this.cartToggle.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount(){
        this.props.fetchUserData();
        this.props.fetchCart(false);
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    // Used to delete a cart item
    deleteItem = (id) => {
        console.log("DELETED " + id);
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
    

    render() {
        const { cart } = this.props;
        return (
                <Navbar light expand="md">
                    <NavbarBrand><Link to="/"><img className="griz-logo" src={grizzlogo} /></Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <GlobalSearch classname="global-search-user" rounded="user-search-rounded" placeholder="Search" />
                                <NavItem>
                                    {
                                        isAuthenticated() && (
                                            <NavLink className="welcome-name" disabled href="#">Welcome, {this.props.user !== undefined && this.props.user.name}!</NavLink>
                                        )
                                    }
                                </NavItem>
                                {console.log(cart)}
                                <CartIndicator cart={cart} onClick={this.cartToggle} cartIsActive={this.props.cartIsActive} />
                                <div className={this.props.cartIsActive ? 'mini-cart-open' : ''}>
                                    <Cart cart={cart} deleteCartItem={this.deleteItem}/>
                                </div>
                                <NavItem>
                                    <NavLink href="#">                             
                                        {
                                            !isAuthenticated() && (   
                                                <Link to="/login">
                                                <Button
                                                id="btn-rounded"
                                                className="login-button"
                                                >
                                                Log In
                                                </Button>
                                                </Link>                                    
                                            )
                                        }
                                        {
                                            isAuthenticated() && (
                                                <Link to="/logout">
                                                <Button
                                                id="btn-rounded"
                                                className="signup-button"     
                                                >
                                                Log Out
                                                </Button>
                                                </Link>
                                            )
                                        } 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        {
                                            !isAuthenticated() && (     
                                                <Link to="/login">          
                                                <Button 
                                                className="signup-button" 
                                                id="btn-rounded"
                                                >
                                                Signup
                                                </Button>
                                                </Link>
                                            )
                                        }               
                                    </NavLink>
                                </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        userIsLoading: state.userIsLoading,
        cart: state.cart.cart,
        cartIsActive: state.cart.cartIsActive
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchUserData: ()=> dispatch(fetchUserByID()),
        fetchCart: (loggedIn) => dispatch(fetchCart(loggedIn)),
        removeCartItem: (pid) => dispatch(removeCartItem(pid)),
        toggleCart: (isOpen) => dispatch(toggleCart(isOpen))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);