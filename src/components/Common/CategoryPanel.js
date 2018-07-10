import React, {Component} from 'react';
import './CategoryPanel.css';
import { Row,Col } from 'reactstrap';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import ReactImageFallback from "react-image-fallback";
import {productsFetchData} from "../../actions/productActions";
import {connect} from "react-redux";

class CategoryPanel extends Component{
    constructor(props) {
        super(props);
        this.search="";
        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
        //console.log(props.match);
        (props.match.params.id)?this.category=props.match.params.id:this.category="";

    }
    loadProducts = (cat) =>{
        this.props.fetchData(this.search, this.page, this.size,this.sort,cat.id,this.brand,this.rating);
        this.props.history.push(`/category/${cat.name}/${cat.id}`);
    };

    render(){
        return(
            <Row className="category-row">
                <Col md="12" className="category-col offset-md-1" >
                    <div className="cat-toolbar">
                        <div className="cat-toolbar-title">
                            <span>POPULAR CATEGORIES</span>
                        </div>
                    </div>
                </Col>
                
                {
                    (_.isEmpty(this.props.categories) ?
                    (
                        <Col>
                            There are no categories to display.
                        </Col>
                    ) : (
                        _.map(_.take(Object.values(this.props.categories), 5), (cat,i) => { 
                            
                            if(i === 0){

                                return (
                        
                                    <Col key={cat.id} xl="2" lg="2" md="2" sm="4" className="category-tile offset-md-1 offset-sm-2" onClick={() => this.loadProducts(cat)}>
                                        <ReactImageFallback
                                        src={`http://ts.ausgrads.academy/images/category_images/${cat.name}.jpg`}
                                        fallbackImage={`http://ts.ausgrads.academy/images/category_images/no-image.jpg`}
                                        initialImage="loader.gif"
                                        alt="cool image should be here"
                                        className="img-fluid img-fluid-cat" />
                                            <div className="category-title" style={{textTransform: "uppercase"}}>{cat.name}</div>
                                    </Col>
                                    
                                )
                            }else{
                                return (
                        
                                    <Col key={cat.id} xl="2" lg="2" md="2" sm="4" className="category-tile" onClick={() => this.loadProducts(cat)}>
                                    <ReactImageFallback
                                        src={`http://ts.ausgrads.academy/images/category_images/${cat.name}.jpg`}
                                        fallbackImage={`http://ts.ausgrads.academy/images/category_images/no-image.jpg`}
                                        initialImage="loader.gif"
                                        alt="cool image should be here"
                                        className="img-fluid img-fluid-cat" />
                                      
                                        <div className="category-title" style={{textTransform: "uppercase"}}>{cat.name}</div>
                                    </Col>
                                    
                                )
                            }
                            
                            
                        })

                    ))
                }
            </Row>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (CategoryPanel));
