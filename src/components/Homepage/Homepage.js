
import React, { Component } from 'react';
import CustomerSortBy from "../CustomerSortByButton/CustomerSortBy";
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { productsFetchData } from '../../actions/productActions'
import ProductTiles from '../Products/ProductTiles';
import AdBanner from '../AdBanner/AdBanner';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class Homepage extends Component {
    componentDidMount(){
        this.props.fetchData(); // Initial fetch
    }

    render() {
        return (
            <div>
                <div className="m-t-20"> 
                    <AdBanner />
                </div>
                {this.props.loading ? <p>Loading....</p> : <p></p>}
                {this.props.products && !this.props.loading ? <ProductTiles  products={this.props.products} /> : <p>No products</p>}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));