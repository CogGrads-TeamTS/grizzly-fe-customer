import React, {Component} from 'react';
import './CategoryPanel.css';
import { Row,Col } from 'reactstrap';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import ReactImageFallback from "react-image-fallback";

class CategoryPanel extends Component{
    
    loadProducts = (cat) =>{ 
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
                        _.map(_.take(_.shuffle(Object.values(this.props.categories)),5), (cat,i) => { 
                            
                            if(i === 0){

                                return (
                        
                                    <Col xl="2" lg="2" md="2" sm="4" className="category-tile offset-md-1 offset-sm-2" onClick={() => this.loadProducts(cat)}>
                                        <ReactImageFallback
                                        src={`http://ts.ausgrads.academy/images/category_images/${cat.name}.jpg`}
                                        fallbackImage={`http://ts.ausgrads.academy/images/category_images/no-image.jpg`}
                                        initialImage="loader.gif"
                                        alt="cool image should be here"
                                        className="img-fluid" />
                                            <div className="category-title" style={{textTransform: "uppercase"}}>{cat.name}</div>
                                    </Col>
                                    
                                )
                            }else{
                                return (
                        
                                    <Col xl="2" lg="2" md="2" sm="4" className="category-tile" onClick={() => this.loadProducts(cat)}>
                                    <ReactImageFallback
                                        src={`http://ts.ausgrads.academy/images/category_images/${cat.name}.jpg`}
                                        fallbackImage={`http://ts.ausgrads.academy/images/category_images/no-image.jpg`}
                                        initialImage="loader.gif"
                                        alt="cool image should be here"
                                        className="img-fluid" />
                                      
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

export default withRouter(CategoryPanel);