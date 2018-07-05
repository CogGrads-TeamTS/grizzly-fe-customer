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


const CartCount = ({ cart }) => {
    if (cart && cart.items && cart.items.length > 0) {
      let itemsCount = cart.items.reduce((a, b) => a + b.quantity, 0);
      return <span className="cart-count">{itemsCount}</span>;
    } else {
      return null;
    }
  }
  
  const CartIcon = ({ cartIsActive }) => {
      console
    if(cartIsActive){
      return <img src="/assets/images/close.svg" className="icon"   style={{ minWidth: 24, padding: 4 }}/>
    } else {
      return <img src="/assets/images/shopping-bag.svg" className="icon"   style={{ minWidth: 24, padding: 4}}/>
    }
  }

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false,
          cartIsActive: false
        };
        this.toggle = this.toggle.bind(this);
        this.cartToggle = this.cartToggle.bind(this);
    }

    componentDidMount(){
        this.props.fetchUserData();
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
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
                                <span className="cart-button" onClick={this.cartToggle}>
                                    <CartIcon cartIsActive={this.state.cartIsActive} />
                                    <CartCount cart={cart} />
                                </span>
                                <div className={this.state.cartIsActive ? 'mini-cart-open' : ''}>
                                    <Cart />
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
        userIsLoading: state.userIsLoading
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchUserData: ()=> dispatch(fetchUserByID())
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);