import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,Row,Col,Button } from 'reactstrap';
import {productsFetchData} from '../../actions/productActions'
import ProductTiles from '../Products/ProductTiles';
import ImagesLoaded from 'react-images-loaded';

class CustomerSortByView extends Component {
    constructor(props) {
        super(props);
        this.search="";
        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
        (props.match.params.id)?this.category=props.match.params.id:this.category="";
        (props.match.params.name)?this.brand=props.match.params.name:this.brand="";
        (props.match.params.rating)?this.rating=props.match.params.rating:this.rating="";

        this.state = {
            loading: true
        };
        //this.loading = true;
    }


    componentDidMount(){
        // Keep here it may fix a problem later on - Dan
        this.props.fetchData(this.search, this.page, this.size, this.sort,this.category,this.brand,this.rating);
        this.setState({ loaded: "" ,
        loading:false});
    }
    handleOnAlways = instance => { };

    handleOnProgress = (instance, image) => { this.loading = true; };

    handleOnFail = instance => { };

    handleDone = instance => { this.loading = false; this.setState({ loaded: "complete-loaded" }); };
    render() { console.log(this.props.products);

        const isLoading= (!this.props.products || this.state.loading ) ?
            (
                <div className="loading-container-full-pre">
                    <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            ) : (
                <div className="container-fluid product-container">
                    <div className={"loading-container-full loaded" + (this.state && !this.state.loading ? this.state.loaded : "")}>
                        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                    <Container fluid>
                        <Row>
                            <Col md="2" sm="4" xs="12">
                                <Button outline id="btn-rounded" onClick={this.returnToHome} className="m-t-10 btn-block" color="info">Back</Button>
                            </Col>
                        </Row>
                        <ImagesLoaded
                            elementType={'ul'} // defaults to 'div'
                            className={'your-container-class'} // defaults to 'images-loaded-container'
                            onAlways={this.handleOnAlways}
                            onProgress={this.handleOnProgress}
                            onFail={this.handleOnFail}
                            done={this.handleDone}
                            background=".image" // true or child selector
                        >
                            <div>
                                <ProductTiles  products={this.props.products} />
                            </div>
                        </ImagesLoaded>
                    </Container>
                </div>
            );

        return (
            <div>
                {isLoading}
            </div>

        );
    }
    returnToHome = () => {
        this.props.history.push("/");
    }

}

const mapStateToProps = (state) => {
    return{
        categories: state.products.filterByCat,
        products: state.products.content,
        last: state.products.last,
        loading:state.productsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search, page, size, sort, catId, brand,rating)=> dispatch(productsFetchData(search, page, size, sort, catId, brand,rating))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSortByView);