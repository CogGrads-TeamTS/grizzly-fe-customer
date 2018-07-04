
import React, { Component } from 'react';
import CustomerSortBy from "../CustomerSortByButton/CustomerSortBy";
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { productsFetchData } from '../../actions/productActions'
import ProductTiles from '../Products/ProductTiles';
import AdBanner from '../AdBanner/AdBanner';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './Homepage.css';
import CategoryPanel from './../Common/CategoryPanel';

import Header from '../Common/CommonHeader';
import SalesPanel from '../Common/SalePanel';
import FeaturedProducts from '../Common/FeaturedProducts';


class Homepage extends Component {
    main = {imageUrl: 'https://cdn.bloomnation.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/20161202060048_file_5841b6d088276.png'}
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

    render() {

        return (
            <div>
                <div className="user-header">
                    <div className="nav-user-row">
                        <Header />    
                    </div>
                </div>
                
                <Container fluid>
                    <CustomerSortBy className="sort-by-col"/>     
                    <div className="m-t-20"> 
                        <AdBanner />
                    </div>

                    <CategoryPanel categories={this.props.categories} />
                    <SalesPanel />
                    <Row className="rewards-panel">
                        <span className="rewards-text">Join our rewards program 
                             <a href="#" style={{color: "#e67e22"}}> <u>NOW!</u></a>
                            </span>
                        </Row>
                    <FeaturedProducts products={this.props.products}/>
                    {/* {this.props.loading ? <p>Loading....</p> : <p></p>} */}
                    {/* {this.props.products && !this.props.loading ? <ProductTiles  products={this.props.products} /> : <p>No products</p>} */}
                </Container>
            
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