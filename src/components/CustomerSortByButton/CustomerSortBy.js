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
            value:'',
            actions: [],
            sortBy: []
        };
        this.search="";
        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
        this.category="";
        this.brand="";
        this.rating="";
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount(){
        // Keep here it may fix a problem later on - Dan
        // this.props.fetchData(this.search, this.page, this.size, this.sort);
    }

    toggle(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    renderSwitch= (state)=> { 
        switch (state.value) {
            case 'category':
                

                return (
                    (_.isEmpty(this.props.categories) ?
                        (
                            <Col>
                                There are no categories to display.
                            </Col>
                        ) : (
                            _.map(_.take(_.shuffle(Object.values(this.props.categories)),5), cat => {
                                return (
                                    <Col key={cat.id}>
                                        <CustomerSortByButton key={cat.id} object={cat} name={cat.name} load={this.loadProducts}/>
                                    </Col>
                                )
                            })

                        ))
                );

            case 'brand':
                return (
                    (_.isEmpty(this.props.brands) ?
                        (
                            <Col>
                                There are no brands to display.
                            </Col>
                        ) : (
                            _.map(_.take(_.shuffle(this.props.brands),5), brand => {
                               
                                return (
                                    <Col key={brand.id}>
                                        <CustomerSortByButton  object={brand} name={brand} load={this.loadProductsByBrand}/>
                                    </Col>
                                )
                            })
                        ))

                );


            case 'rating':
                return (
                    (_.isEmpty(this.props.ratings) ?
                        (
                            <Col>
                                There are no ratings to display.
                            </Col>
                        ) : (
                            _.map(_.take(_.shuffle(this.props.ratings),5), rating => {
                                
                                return (
                                    <Col key={rating.id}>
                                        <CustomerSortByButton  object={rating} name={rating} load={this.loadProductsByRating}/>
                                    </Col>
                                )
                            })
                        ))

                );
            // case 'price':
            //     return (
            //         (_.isEmpty(this.props.products) ?
            //             (
            //                 <Col>
            //                     There are no brands to display.
            //                 </Col>
            //             ) : (
            //                 _.map(_.take(_.shuffle(this.props.products),5), prod => {
            //                     
            //                     return (
            //                         <Col>
            //                             <CustomerSortByButton  key={prod.id} object={prod} name={prod.price} load={this.loadProductsByBrand}/>
            //                         </Col>
            //                     )
            //                 })
            //             ))
            //
            //     );
            default:
                return (
                    (_.isEmpty(this.props.categories) ?
                        (
                            <Col>
                                There are no categories to display.
                            </Col>
                        ) : (
                            _.map(_.take(_.shuffle(Object.values(this.props.categories)),5), cat => {
                                return (
                                    <Col key={cat.id}>
                                        <CustomerSortByButton key={cat.id} object={cat} name={cat.name} load={this.loadProducts}/>
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

    loadProducts = (cat) =>{ 
        this.props.fetchData(this.search, this.page, this.size,this.sort,cat.id,this.brand,this.rating);
        this.props.history.push(`/category/${cat.name}/${cat.id}`);
    };

    loadProductsByBrand = (brandName) =>{ 
        this.props.fetchData(this.search, this.page, this.size,this.sort,this.category,brandName,this.rating);
        this.props.history.push(`/brand/${brandName}`);
    };

    loadProductsByRating = (rating) =>{ 
        this.props.fetchData(this.search, this.page, this.size,this.sort,this.category,this.brand,rating);
        this.props.history.push(`rating/${rating}`);
    };


    render()
    {
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
                        </DropdownMenu>
                    </ButtonDropdown>
                </Col>
                {
                    this.renderSwitch(this.state)
                }
            </Row>

        );
    }
}

const mapStateToProps = (state) => {
    return{
        categories: state.products.filterByCat,
        brands:state.products.filterBrand,
        ratings:state.products.filterRating,
        products: state.products.content,
        last: state.products.last
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search, page, size, sort,catId, brand, rating)=> dispatch(productsFetchData(search, page, size, sort,catId,brand,rating))
    };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (CustomerSortBy));