import React, {Component} from 'react';
import {connect} from 'react-redux';
import { productFetchDataByID, productFetchImagesByID } from '../../actions/productActions';
import { Container, Row, Col, Button, FormGroup, Label, Input} from 'reactstrap';

import ProductViewCarusel from './ProductViewCarousel';
import ProductsSearched from './ProductsSearched';
import './ProductSingle.css';

class ProductSingle extends Component{

    componentDidMount(){ 
        this.props.fetchData(this.props.match.params.id);
        this.props.fetchImages(this.props.match.params.id);
    }
    
    render(){
            
        const isLoading = (this.props.product === undefined) ?
                (  
                    <p>The product is loading...</p>
                ) : (
                    <div className="container-fluid">
                        <Row>
                            <Col md="4" sm="6" xs="12">
                                <ProductViewCarusel images={this.props.images} /> 
                            </Col>
                            
                            <Col md="5" sm="6" xs="12">
                                <div className="title">{this.props.product.name}</div>
                                <div className="description">{this.props.product.description}</div>
                                <div className="price">AUD ${this.props.product.price}</div>
                                <div className="discount">{this.props.product.discount}% Off</div>
                                <Row style={{borderTop: "1px solid #eee", marginTop: "5%"}}>
                                <Button  className="buy-button" id="btn-rounded">Buy Now</Button>
                                    <Button  className="add-button" id="btn-rounded">Add to Cart</Button>
                                    </Row>
                            </Col>

                            <Col className="buy-panel" md="3" sm="12">
                                
                            <ProductsSearched />
                            </Col>
                        </Row>
                        
                    </div>
                );
    
            return (
                <div>
                    {isLoading}
                </div>
                
            )
        }
    }

const MapStateToProps = (state) =>{ 
    return{
        product: state.products.selected, 
        images: state.products.images
    }
}

const MapDispatchToProps = (dispatch) => {
    return{
        fetchData: (id) => dispatch(productFetchDataByID(id)),
        fetchImages: (id) => dispatch(productFetchImagesByID(id))
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(ProductSingle);