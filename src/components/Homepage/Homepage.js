
import React, { Component } from 'react';
import CustomerSortBy from "../CustomerSortByButton/CustomerSortBy";
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { productsFetchData } from '../../actions/productActions'
import ProductTiles from '../Products/ProductTiles';
import AdBanner from '../AdBanner/AdBanner';
import { withRouter } from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import ImageCategory from './../../components/Common/ImageCategory';
import SaleItems from './../../components/Common/SaleItems';
import FeaturedProducts from './../../components/Common/FeaturedProducts';
import './homepage.css';
import producttiletest from './../Products/producttiletest';

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

    render() {//console.log(this.props.products);

        return (
            <div>
                {/* <Row style={{backgroundColor: "#525050"}}>
                <Col>
                    <ul className="list-group">
                    <li className="list-group-item">test</li>
                    <li className="list-group-item">test</li>
                    <li className="list-group-item">test</li>
                    <li className="list-group-item">test</li>
                    <li className="list-group-item">test</li>
                    </ul>
                    </Col>
                    </Row> */}
                <CustomerSortBy />
                
                <div className="m-t-20">
                    <AdBanner />
                </div>
                
                    <ImageCategory categories={this.props.categories}/>
                   <producttiletest />
                {/* <div className="m-t-20">
                    <AdBanner />
                </div>
                {this.props.loading ? <p>Loading....</p> : <p></p>}
                {this.props.products && !this.props.loading ? <ProductTiles  products={this.props.products} /> : <p>No products</p>} */}
            <SaleItems />
            <div className="row rewards">
		        <span className="rewards-text">Join our rewards program <u><a href="#" style={{color: "#e67e22"}}>NOW!</a></u></span>
            </div>
            
            <FeaturedProducts categories={this.props.products}/>
            <Row style={{height: "300px;"}}></Row>
	
            <Row className="footer" style={{marginTop: "65px"}}>
    
		<div style={{bottom: "0", color: "#000", fontSize: "13px"}}>
			Privacy Policy      |       Terms & Conditions      |       Grizzy Store Limited. Copyright 2018
		</div>
	</Row>

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