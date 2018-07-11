import React, {Component} from 'react';
import '../Common/CategoryPanel.css';
import { Container,Row,Col } from 'reactstrap';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import ReactImageFallback from "react-image-fallback";
import {productsFetchData} from "../../actions/productActions";
import {connect} from "react-redux";
import Breadcrumb from "../Common/breadcrumb";

class CategoriesView extends Component{
    constructor(props) {
        super(props);
        this.search="";
        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
       
        (props.match.params.id)?this.category=props.match.params.id:this.category="";

    }
    loadProducts = (cat) =>{
        this.props.fetchData(this.search, this.page, this.size,this.sort,cat.id,this.brand,this.rating);
        this.props.history.push(`/category/${cat.name}/${cat.id}`);
    };
    returnToHome = () => {
        this.props.history.push("/");
    }
    returnToAllCat = () => {
        this.props.history.push("/categories");
    }
    render(){
        return(
            <div>
                <Breadcrumb returnToHome={this.returnToHome} returnToAllCat={this.returnToAllCat}/>
                <Container>
                <Row className="category-row center-align">
                    {
                        (_.isEmpty(this.props.categories) ?
                            (
                                <Col>
                                    Loading.....
                                </Col>
                            ) : (
                                _.map(Object.values(this.props.categories), (cat) => {
                                        return (
                                            <Col key={cat.id} xl="3" lg="3" md="3" sm="4" xs="6" className="category-tile" onClick={() => this.loadProducts(cat)}>
                                                <ReactImageFallback
                                                    src={`http://ts.ausgrads.academy/images/category_images/${cat.name}.jpg`}
                                                    fallbackImage={`http://ts.ausgrads.academy/images/category_images/no-image.jpg`}
                                                    initialImage="loader.gif"
                                                    alt="cool image should be here"
                                                    className="img-fluid img-fluid-cat" />

                                                <div className="category-title" style={{textTransform: "uppercase"}}>{cat.name}</div>
                                            </Col>

                                        )


                                })

                            ))
                    }
                </Row>
                </Container>
            </div>
        )
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
        fetchData: (search, page, size, sort,catId, brand, rating)=> dispatch(productsFetchData(search, page, size, sort,catId,brand,rating))
    };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (CategoriesView));
