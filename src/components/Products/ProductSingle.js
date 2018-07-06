import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productFetchDataByID, productFetchImagesByID } from '../../actions/productActions';
import { addProductToCart } from '../../actions/cartActions';
import { CardColumns, Container, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import ProductViewCarusel from './ProductViewCarousel';
import ProductsSearched from './ProductsSearched';
import PaypalButton from './PaypalButton';
import config from '../../config';
import './ProductSingle.css';
import ImagesLoaded from 'react-images-loaded';

const CLIENT = {
    sandbox: config.paypal.sandbox
};
const ENV = 'sandbox';

class ProductSingle extends Component {
    constructor(props) {
        super(props);
        this.loading = true;
    }

    componentDidMount() {
        this.props.fetchData(this.props.match.params.id);
        this.props.fetchImages(this.props.match.params.id);
        this.setState({ loaded: "" });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchData(this.props.match.params.id);
            this.props.fetchImages(this.props.match.params.id);
        } else this.loading = false;

        if (JSON.stringify(this.props.images) !== JSON.stringify(prevProps.images)) {
            this.props.fetchImages(this.props.match.params.id);
        }
    }

    handleOnAlways = instance => { };

    handleOnProgress = (instance, image) => { this.loading = true; };

    handleOnFail = instance => { };

    handleDone = instance => { this.loading = false; this.setState({ loaded: " complete-loaded" }); };

    addToCartClick = () => {
        this.props.addToCart(this.props.product.id)
    }

    calculateNewPrice(price, discount) {
        return price - ((discount / 100) * price);
    }

    render() {
        const onSuccess = (payment,name) =>{
            console.log(payment);
            alert('Successful payment '+ name);
            this.props.history.push('/');
        };


        const onError = (error) =>
            console.log('Erroneous payment OR failed to load script!', error);

        const onCancel = (data) =>{
            console.log('Cancelled payment!', data);
            this.props.history.push('/');
        };
        const isLoading = (this.loading || !this.props.product) ?
            (
                <div className="loading-container-full-pre">
                    <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ) : (
                <div className="container-fluid product-container">
                    <div className={"loading-container-full loaded" + (this.state && !this.loading ? this.state.loaded : "")}>
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
                                <div className="prod-body-images">
                                    <ProductViewCarusel images={this.props.images} />
                                </div>
                            </ImagesLoaded>
                        </Col>

                        <Col md="5" sm="6" xs="12">
                            <div className="title">
                                {this.props.product.name}
                                {(this.props.product.discount > 0 ? <div className="discount-product-single">{this.props.product.discount}% Off</div> : null)}
                            </div>
                            <div className="description">{this.props.product.description}</div>
                            <div className="price">AUD ${this.calculateNewPrice(this.props.product.price, this.props.product.discount)}</div>
                            {(this.props.product.discount > 0 ? <div className="old-price">AUD ${this.props.product.price}</div> : null)}
                            <Row style={{ borderTop: "1px solid #eee", marginTop: "5%" }}>
                                <PaypalButton
                                client={CLIENT}
                                env={ENV}
                                commit={true}
                                currency={'AUD'}
                                total={this.props.product.price}
                                onSuccess={onSuccess}
                                onError={onError}
                                onCancel={onCancel}
                                />
                                <Button className="add-button" id="btn-rounded" onClick={this.addToCartClick}>Add to Cart</Button>
                            </Row>
                        </Col>

                        <Col className="buy-panel" md="3" sm="12">
                            <div className="searched-title">People also searched for</div>
                            <CardColumns style={{ columnCount: "2" }}>
                                <ProductsSearched product={this.props.product} category={this.props.product.category} />
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