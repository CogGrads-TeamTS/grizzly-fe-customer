import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col} from 'reactstrap';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown } from 'reactstrap';
import CustomerSortByButton from "./CustomerSortByButton";
import {productsFetchData} from "../../actions/productActions";


class CustomerSortBy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            dropdownValue: 'Shop By Category',
            value:'category',
            actions: [],
            sortBy: []
        };
        this.search="";
        this.page = 0;
        this.size = 5;
        this.sort = "id,desc";
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount(){
        this.props.fetchData(this.search, this.page, this.size, this.sort);
    }

    toggle(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


    renderSwitch= (state)=> { console.log(state);
        switch (state.value) {
            case 'category':
                //console.log(event.currentTarget.value);
                return (
                    (_.isEmpty(this.props.categories) ?
                        (
                            <Col>
                                There are no categories to display.
                            </Col>
                        ) : (
                            _.map(this.props.categories, cat => {
                                return (
                                    <Col>
                                        <CustomerSortByButton key={cat.id} category={cat} name={cat.name} load={this.loadProducts}/>
                                    </Col>
                                )
                            })
                        ))
                );

            case 'brand':
                return (
                    (_.isEmpty(this.props.products) ?
                        (
                            <Col>
                                There are no brands to display.
                            </Col>
                        ) : (
                            _.map(this.props.products, prod => {
                                console.log(prod.brand);
                                return (
                                    <Col>
                                        <CustomerSortByButton  key={prod.id} category={prod} name={prod.brand} load={this.loadProductsByBrand}/>
                                    </Col>
                                )
                            })
                        ))

                );


            case 'rating':
                return (
                    (_.isEmpty(this.props.products) ?
                        (
                            <Col>
                                There are no brands to display.
                            </Col>
                        ) : (
                            _.map(this.props.products, prod => {
                                console.log(prod.rating);
                                return (
                                    <Col>
                                        <CustomerSortByButton  key={prod.id} category={prod} name={prod.rating} load={this.loadProductsByBrand}/>
                                    </Col>
                                )
                            })
                        ))

                );

            case 'price':
                return (
                    (_.isEmpty(this.props.products) ?
                        (
                            <Col>
                                There are no brands to display.
                            </Col>
                        ) : (
                            _.map(this.props.products, prod => {
                                console.log(prod.rating);
                                return (
                                    <Col>
                                        <CustomerSortByButton  key={prod.id} category={prod} name={prod.price} load={this.loadProductsByBrand}/>
                                    </Col>
                                )
                            })
                        ))

                );
            default:
                return (
                    (_.isEmpty(this.props.categories) ?
                        (
                            <Col>
                                There are no categories to display.
                            </Col>
                        ) : (
                            _.map(this.props.categories, cat => {
                                return (
                                    <Col>
                                        <CustomerSortByButton key={cat.id} category={cat} name={cat.name}  load={this.loadProducts}/>
                                    </Col>
                                )
                            })
                        ))
                );

        }
    };

    changeValue = event => {
        this.setState({
            dropdownValue: event.currentTarget.textContent,
            value:event.currentTarget.value
        });
        this.renderSwitch(this.state);
    };


    render()

    { //console.log(this.props.products);

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
                {
                    this.renderSwitch(this.state)
                }
            </Row>

        );
    }
    loadProducts = (cat) =>{ console.log(cat.name);
        this.props.fetchData(this.search, this.page, this.size,this.sort,cat.id);
        this.props.history.push(`/${cat.name}/${cat.id}`);
    };

    loadProductsByBrand = (prod) =>{ console.log(prod.name);
        this.props.fetchData(this.search, this.page, this.size,this.sort);
        this.props.history.push(`/${prod.brand}/${prod.id}`);
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (CustomerSortBy));