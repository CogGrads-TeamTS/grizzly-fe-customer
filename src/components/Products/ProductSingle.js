import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productFetchDataByID, productFetchImagesByID } from '../../actions/productActions';
import { addProductToCart } from '../../actions/cartActions';
import { CardColumns, Container, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import ProductViewCarusel from './ProductViewCarousel';
import ProductsSearched from './ProductsSearched';
import './ProductSingle.css';
import ImagesLoaded from 'react-images-loaded';

class ProductSingle extends Component {
    constructor(props){
        super(props);

        console.log("Set to true in constructor")
        this.loading = true;
    }

    componentDidMount() {
        this.props.fetchData(this.props.match.params.id);
        this.props.fetchImages(this.props.match.params.id);
        this.setState({loaded: ""});
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id){
            this.loading = true;
            this.props.fetchData(this.props.match.params.id);
            this.props.fetchImages(this.props.match.params.id);
        } else this.loading = false;

        if(JSON.stringify(this.props.images) !== JSON.stringify(prevProps.images)){
            this.props.fetchImages(this.props.match.params.id);
        }
    }

    handleOnAlways = instance => { };

    handleOnProgress = (instance, image) => {};

    handleOnFail = instance => { };

    handleDone = instance => {console.log("Images have loaded"); this.loading = false; this.setState({loaded: " complete-loaded"});};

    addToCartClick = () => {
        this.props.addToCart(this.props.product.id)
    }

    render() {
        console.log(this.loading)
        const isLoading = (this.loading) ?
            (
                <div className="loading-container-full-pre">
                    <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ) : (
                <div className="container-fluid">
                    <div className={"loading-container-full loaded" + (this.state && !this.loading ? this.state.loaded : "") }>
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
                                <Button className="add-button" id="btn-rounded" onClick={this.addToCartClick}>Add to Cart</Button>
                            </Row>
                        </Col>

                        <Col className="buy-panel" md="3" sm="12">
                                <div className="searched-title">People also searched for</div>
                                <CardColumns style={{columnCount: "2"}}>
                                    <ProductsSearched category={this.props.product.category}/>
                                </CardColumns>
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
        fetchImages: (id) => dispatch(productFetchImagesByID(id)),
        addToCart: (pid) => dispatch(addProductToCart(pid)),
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(ProductSingle);