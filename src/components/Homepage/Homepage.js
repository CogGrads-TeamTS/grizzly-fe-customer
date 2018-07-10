import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { productsFetchData } from '../../actions/productActions'
import AdBanner from '../AdBanner/AdBanner';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import './Homepage.css';
import CategoryPanel from './../Common/CategoryPanel';
import SalesPanel from '../Common/SalePanel';
import FeaturedProducts from '../Common/FeaturedProducts';


class Homepage extends Component {

    componentDidMount(){
        this.props.fetchData(); //Initial fetch
    }

    render() {
        return (
              <div>
                <div className="m-t-20"> 
                    <AdBanner />
                </div>

                <Container fluid>
                    <CategoryPanel categories={this.props.categories} />
                    <SalesPanel products={this.props.products} />
                    <Row className="rewards-panel">
                        <span className="rewards-text">Join our rewards program 
                             <a href="#" style={{color: "#e67e22"}}> <u>NOW!</u></a>
                            </span>
                        </Row>
                    <FeaturedProducts products={this.props.products}/>

                    <div className="footer" style={{bottom: "0", color: "#000", fontSize: "13px"}}>
                        Privacy Policy |
                            Terms & Conditions |
                            Grizzly Store Limited. Copyright 2018
                            
                            </div>
                </Container>
            
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