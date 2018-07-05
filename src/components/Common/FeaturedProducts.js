import React, {Component} from 'react';
import './styles/Featuredproducts.css';
import {Row, Col} from 'reactstrap';
import _ from 'lodash';

class FeaturedProducts extends Component{
    render(){ 
        const ratedItems = [];

        const buildRatedProduct = () => { 
            if(!this.props.products){
                return ratedItems;
            }
            _.map(_.shuffle(Object.values(this.props.products)), (product,i) => { 
                if(ratedItems.length >= 5) return ratedItems;
                
                if(product.discount <= 30  && product.discount > 0){
                    ratedItems.push(product);
                }
            })
            return ratedItems;
        };

    const colOffset = "offset-md-1";

    const customStyle = {
        backgroundColor: "#fff",
        border: "1px solid #cccccc",
        boxShadow: "0 8px 16px -4px #222",
        minHeight: "360px"
    }
        return(
            <Row className="featured-row">
                <Col md="12" className="featured-col offset-md-1" >
                    <div className="featured-toolbar">
                        <div className="featured-toolbar-title">
                            <span>FEATURED PRODUCTS</span>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}


export default FeaturedProducts;