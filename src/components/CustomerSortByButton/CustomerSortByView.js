
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,Row,Col,Button } from 'reactstrap';
import {productsFetchData} from '../../actions/productActions'
import ProductTiles from '../Products/ProductTiles';


class CustomerSortByView extends Component {
    constructor(props) { console.log(props.match.params);
        super(props);
        (props.match.params.name)?this.search=props.match.params.name:this.search="";
        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
        (props.match.params.id)?this.category=props.match.params.id:this.category="";
        console.log(this.search);
        console.log(this.category);
    }

    componentDidMount(){
        this.props.fetchData(this.search, this.page, this.size, this.sort,this.category);
    }

    render() {

        return (
            <Container fluid>
                <Row>
                    <Col md="2" sm="4" xs="12">
                        <Button outline id="btn-rounded" onClick={this.returnToHome} className="m-t-10 btn-block" color="info">Back</Button>
                    </Col>
                </Row>
                {this.props.loading ? <p>Loading....</p> : <p></p>}
                {this.props.products && !this.props.loading ? <ProductTiles  products={this.props.products} /> : <p></p>}
            </Container>
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

const mapDispatchToProps = (dispatch) => { //console.log(dispatch);
    return {
        fetchData: (search, page, size, sort, catId)=> dispatch(productsFetchData(search, page, size, sort, catId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSortByView);