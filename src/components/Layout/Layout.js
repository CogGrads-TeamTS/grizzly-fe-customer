
import React, { Component } from 'react';
import CustomerSortBy from "../CustomerSortByButton/CustomerSortBy";
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { productsFetchData } from '../../actions/productActions'
import ProductTiles from '../Products/ProductTiles';
import AdBanner from '../AdBanner/AdBanner';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Header from '../Common/CommonHeader';
import Homepage from '../Homepage/Homepage';


class Layout extends Component {
    componentDidMount(){
        this.props.fetchData(); // Initial fetch
    }

    render() {

        return (
            <div>
            <div className="user-header">
                <div className="nav-user-row">
                    <Header />    
                </div>
            </div>
                <CustomerSortBy className="sort-by-col"/>   
                {this.props.children}
            </div>
        );
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
        fetchData: (search, page, size, sort, catId,brand,rating)=> dispatch(productsFetchData(search, page, size, sort, catId,brand,rating))
        
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));