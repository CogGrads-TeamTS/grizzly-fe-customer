import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col} from 'reactstrap';
import _ from 'lodash';
import { Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown } from 'reactstrap';
import CustomerSortByButton from "./CustomerSortByButton";
import {productsFetchData,productsFetchDataByCategory} from "../../actions/productActions";


class CustomerSortBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            dropdownValue: 'Shop By Category',
            actions: [],
            sortBy: []
        };
        this.search="";
        this.page = 0;
        this.size = 5;
        this.sort = "id,desc";

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
    };

    changeValueCat = event => {
        this.setState({
            dropdownValue: event.currentTarget.textContent,
        });
        // console.log('sort value: ' + event.currentTarget.value );

        // this.props.sortChanged(event.currentTarget.value);

       // this.props.update(event.currentTarget.value);
    };

    componentDidMount(){
        this.props.fetchData(this.search, this.page, this.size, this.sort);
    }

    render()

    { //console.log(this.props.products);

        const IsEmpty = _.isEmpty(this.props.categories) ?
            (
                <Col>
                    There are no categories to display.
                </Col>
            ) : (
                _.map(this.props.categories, cat => {
                    return (
                        <Col>
                        <CustomerSortByButton key={cat.id} category={cat} load={this.loadProducts} />
                        </Col>
                    )
                })
            );
        return (
            <Row style={{marginLeft: '0px',marginRight: '0px'}}>
                <Col>
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
                </Col>
                    {IsEmpty}
            </Row>

        );
    }
    loadProducts = (cat) =>{ console.log(cat.name);
       this.props.fetchData(this.search, this.page, this.size,this.sort,cat.id);
    }
}

const mapStateToProps = (state) => {
    return{
        categories: state.products.filterByCat,
        products: state.products.content,
        last: state.products.last
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search, page, size, sort,catId)=> dispatch(productsFetchData(search, page, size, sort,catId)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (CustomerSortBy);