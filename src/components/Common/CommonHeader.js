import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { Link } from 'react-router-dom';

import '../../App.css';
import isAuthenticated from '../../Auth/isAuthenticated'
import grizzlogo from '../../assets/griz-logo.png';
import { fetchUserByID } from '../../actions/userActions';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        this.props.fetchUserData();
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }


    render() {
        //console.log(this.props.user);
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