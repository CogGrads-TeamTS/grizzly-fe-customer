import React, { Component } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown } from 'reactstrap';

class CustomerSortBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            dropdownValue: 'Shop By Category',
            actions: [],
            sortBy: []
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    changeValue = event => {
        this.setState({
            dropdownValue: event.currentTarget.textContent,
        });

        // console.log('sort value: ' + event.currentTarget.value );

        // this.props.sortChanged(event.currentTarget.value);

        // console.log('category filter sort param: ' + this.props.filter.sort);

        // Enter new action here
        // console.log('fetching params...');
        // setTimeout (() => {
        //     this.props.fetchData()
        // } , 2000);

       // this.props.update(event.currentTarget.value);
    };

    render() {
        return (

                <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="signup-button m-t-10" id="btn-rounded"  caret>
                        {this.state.dropdownValue}
                    </DropdownToggle>
                    <DropdownMenu id="categoryDropdown">
                        <DropdownItem onClick={this.changeValue} value="category">Shop By Category</DropdownItem>
                        <DropdownItem onClick={this.changeValue} value="brand">Shop By Brand</DropdownItem>
                        <DropdownItem onClick={this.changeValue} value="rating">Shop By Rating</DropdownItem>
                        <DropdownItem onClick={this.changeValue} value="price">Shop By Price</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>

        );
    }
}

export default CustomerSortBy;