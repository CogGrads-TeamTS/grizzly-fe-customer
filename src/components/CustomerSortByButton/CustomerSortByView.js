import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,Row,Col,Button } from 'reactstrap';
import {productsFetchData} from '../../actions/productActions'
import ProductTiles from '../Products/ProductTiles';
import Breadcrumb from '../Common/breadcrumb';

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
    }


    componentDidMount(){
        // Keep here it may fix a problem later on - Dan
       // this.props.fetchData(this.search, this.page, this.size, this.sort,this.category,this.brand,this.rating);
    }

    render() { 
        let url = window.location.pathname;
        let test = url.split("/");
        let catName = test[2];

        if(catName.includes("%20")) {
            catName = catName.replace("%20", " ");
            console.log(catName);
        }
        return (
            <div>
                <Breadcrumb returnToHome={this.returnToHome} catName={catName}/>
                {/* // <Container fluid> */}
                {/* <Row>
                    <Col md="2" sm="4" xs="12">
                        <Button outline id="btn-rounded" onClick={this.returnToHome} className="m-t-10 btn-block" color="info">Back</Button>
                    </Col>
                </Row> */}
                {console.log(window.location.pathname)}
                
                {this.props.loading ? <p>Loading....</p> : <p></p>}
                {this.props.products && !this.props.loading ? <ProductTiles  products={this.props.products} catName={catName} returnToHome={this.returnToHome}/> : <p></p>}
            {/* </Container> */}
            
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