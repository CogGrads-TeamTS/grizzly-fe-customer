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
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Button,
    DropdownItem } from 'reactstrap';

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

    goTo(route) {
        this.props.history.replace(`/${route}`)
      }
    
      login() {
        this.props.auth.login();
      }
    
      logout() {
        this.props.auth.logout();
      }

    render() {
        const { isAuthenticated } = this.props.auth; 
    
        return (
            <div>
                <Navbar light expand="md">
                    <NavbarBrand><img className="griz-logo" src={grizzlogo} onClick={this.goTo.bind(this, '')}/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <GlobalSearch classname="global-search-user" rounded="user-search-rounded" placeholder="Search" />
                                <NavItem>
                                    <NavLink href="#">                             
                                        {
                                            !isAuthenticated() && (
                                                <Button
                                                id="btn-rounded"
                                                className="login-button"
                                                onClick={this.login.bind(this)}>
                                                Log In
                                                </Button>
                                            )
                                        }
                                        {
                                            isAuthenticated() && (
                                                <Button
                                                id="btn-rounded"
                                                className="signup-button"
                                                onClick={this.logout.bind(this)}>
                                                Log Out
                                                </Button>
                                            )
                                        } 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        {
                                            !isAuthenticated() && (               
                                                <Button className="signup-button" id="btn-rounded">Signup</Button>
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