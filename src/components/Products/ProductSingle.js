import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productFetchDataByID, productFetchImagesByID } from '../../actions/productActions';
import { Container, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';

import ProductViewCarusel from './ProductViewCarousel';
import ProductsSearched from './ProductsSearched';
import './ProductSingle.css';
import ImagesLoaded from 'react-images-loaded';

class ProductSingle extends Component {

    componentDidMount() {
        this.props.fetchData(this.props.match.params.id);
        this.props.fetchImages(this.props.match.params.id);

        this.setState({loaded: ""});
    }


    handleOnAlways = instance => { };

    handleOnProgress = (instance, image) => {};

    handleOnFail = instance => { };

    handleDone = instance => {this.setState({loaded: " complete-loaded"});};

    render() {
        const isLoading = (this.props.product === undefined) ?
            (
                <div className="loading-container-full-pre">
                    <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ) : (
                <div className="container-fluid">
                    <div className={"loading-container-full loaded" + (this.state ? this.state.loaded : "") }>
                        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>

                    <Row>
                        <Col md="4" sm="6" xs="12">
                            <ImagesLoaded
                                elementType={'ul'} // defaults to 'div'
                                className={'your-container-class'} // defaults to 'images-loaded-container'
                                onAlways={this.handleOnAlways}
                                onProgress={this.handleOnProgress}
                                onFail={this.handleOnFail}
                                done={this.handleDone}
                                background=".image" // true or child selector
                            >
                                <ProductViewCarusel images={this.props.images} />
                            </ImagesLoaded>
                        </Col>

                        <Col md="5" sm="6" xs="12">
                            <div className="title">{this.props.product.name}</div>
                            <div className="description">{this.props.product.description}</div>
                            <div className="price">AUD ${this.props.product.price}</div>
                            <div className="discount">{this.props.product.discount}% Off</div>
                            <Row style={{ borderTop: "1px solid #eee", marginTop: "5%" }}>
                                <Button className="buy-button" id="btn-rounded">Buy Now</Button>
                                <Button className="add-button" id="btn-rounded">Add to Cart</Button>
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

const MapStateToProps = (state) => {
    return {
        product: state.products.selected,
        images: state.products.images
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        fetchData: (id) => dispatch(productFetchDataByID(id)),
        fetchImages: (id) => dispatch(productFetchImagesByID(id))
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(ProductSingle);