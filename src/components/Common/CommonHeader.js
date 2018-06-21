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
    Button
 } from 'reactstrap';

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

                <Navbar light expand="md">
                    <NavbarBrand><img className="griz-logo" alt="TS Grizzly Logo" src={grizzlogo} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <GlobalSearch classname="global-search-user" rounded="user-search-rounded" placeholder="Search" />
                            <NavItem>
                                <NavLink href="#">
                                    <Button outline className="login-button" id="btn-rounded">Login</Button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink href="#">
                                <Button  className="signup-button" id="btn-rounded">Signup</Button>
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

        )
    }
}

export default Header;