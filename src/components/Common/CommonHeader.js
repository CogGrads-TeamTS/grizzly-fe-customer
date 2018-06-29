import React, { Component } from 'react';
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

import isAuthenticated from '../../Auth/isAuthenticated'
import grizzlogo from '../../assets/griz-logo.png';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar light expand="md">
                    <NavbarBrand><Link to="/"><img className="griz-logo" src={grizzlogo} /></Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <GlobalSearch classname="global-search-user" rounded="user-search-rounded" placeholder="Search" />
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
                                                >Signup</Button>
                                                </Link>
                                            )
                                        }               
                                    </NavLink>
                                </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Header;