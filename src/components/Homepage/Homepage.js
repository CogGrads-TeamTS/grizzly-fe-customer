
import React, { Component } from 'react';

import CustomerSortBy from "../CustomerSortByButton/CustomerSortBy";
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import {productsFetchData} from '../../actions/productActions'
import ProductTiles from '../Products/ProductTiles';

import AdBanner from '../AdBanner/AdBanner';

class Homepage extends Component {
    main = {text: 'Smartphones',imageUrl: 'https://i.nextmedia.com.au/Utils/ImageResizer.ashx?n=https%3A%2F%2Fi.nextmedia.com.au%2Fgalleries%2F20180412105252_iphone-lineup400.jpg&h=450&w=800&c=0&s=0', badge: 'Category', badgeColor: 'info'}
    productData = [
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
        {id: 1, name: 'Cake', imageUrl: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'},
    ]

    componentDidMount(){
        this.props.fetchData(); // Initial fetch
    }

    render() {//console.log(this.props.products);

        return (
            <Container fluid>
                <CustomerSortBy />
                <div className="m-t-20">
                    <AdBanner />
                </div>
                {this.props.loading ? <p>Loading....</p> : <p></p>}
                {this.props.products && !this.props.loading ? <ProductTiles  products={this.props.products} /> : <p>No products</p>}
            </Container>
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

const mapDispatchToProps = (dispatch) => { //console.log(dispatch);
    return {
        fetchData: (search, page, size, sort, catId)=> dispatch(productsFetchData(search, page, size, sort, catId))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);