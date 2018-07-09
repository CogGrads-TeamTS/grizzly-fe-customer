import React, { Component } from 'react';
import './styles/Featuredproducts.css';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import ProductTiles from '../Products/ProductTiles';

class FeaturedProducts extends Component {
    render() {
        console.log(this.props.products)
        let ratedItems = [];

        // Build the rated product list
        const buildRatedProduct = () => {
            if (!this.props.products) {
                return ratedItems;
            }

            console.log(this.props.products)
            ratedItems = this.props.products.sort((a, b) => {
                return b.rating - a.rating;
            }).slice(0,5)
            return ratedItems;
        };

        const colOffset = "offset-md-1";

        const customStyle = {
            backgroundColor: "#fff",
            border: "1px solid #cccccc",
            boxShadow: "0 8px 16px -4px #222",
            minHeight: "360px"
        }
        return (
            <Row className="featured-row">
                <Col md="12" className="featured-col offset-md-1" >
                    <div className="featured-toolbar">
                        <div className="featured-toolbar-title">
                            <span>FEATURED PRODUCTS</span>
                        </div>
                    </div>
                </Col>
                <div style={{ width: "98%", margin: "0 0 100px 0" }}>
                    <ProductTiles products={buildRatedProduct()} type="featured" colOffset={colOffset} />
                </div>
            </Row>
        )
    }
}


export default FeaturedProducts;