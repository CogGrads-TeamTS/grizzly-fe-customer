import React, {Component} from 'react';
import './ImageCategory.css';
import {Row, Col} from 'reactstrap';
import book from './../AdBanner/category-images/books.jpg';
import watch from './../AdBanner/category-images/watches.jpg';
import Video from './../AdBanner/category-images/gamingx.jpg';
import Cameras from './../AdBanner/category-images/Fashion.jpg';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import { withRouter } from 'react-router';

class ImageCategory extends Component{
    
    render(){
        console.log(this.props.categories)
        return(
            <Row style={{marginTop: "35px"}}>
                <Col  md="12" className=" offset-md-1" >
                    <div className="cat-toolbar">
                        <div className="cat-title">
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
                        _.map(_.take(Object.values(this.props.categories),5), (cat,i) => { 
                            
                            if(i === 0){

                                return (
                        
                                    <Col xl="2" lg="2" md="2" sm="4" className="category-tile offset-md-1 offset-sm-2" onClick={() => this.loadProducts(cat)}>
                                        <img className="img-fluid" src={`http://ts.ausgrads.academy/images/category_images/${cat.name}.jpg`} />
                                            <div className="title" style={{textTransform: "uppercase"}}>{cat.name}</div>
                                    </Col>
                                    
                                )
                            }else{
                                return (
                        
                                    <Col xl="2" lg="2" md="2" sm="4" className="category-tile" onClick={() => this.loadProducts(cat)}>
                                        <img className="img-fluid" src={`http://ts.ausgrads.academy/images/category_images/${cat.name}.jpg`} />
                                            <div className="title" style={{textTransform: "uppercase"}}>{cat.name}</div>
                                    </Col>
                                    
                                )
                            }
                            
                            
                        })

                    ))
                }
                
                {/* <Col xl="2" lg="2" md="2" sm="7" className="category-tile offset-md-1 offset-sm-2" onClick={this.loadProducts}>
                    <img className="img-fluid" src={watch}  />
                        <div className="title">WATCHES</div>
                </Col>
                <Col xl="2" lg="2" md="2" className="category-tile">
                    <img className="img-fluid" src={camera}  />
                        <div className="title">CAMERAS</div>
                </Col> */}
                {/* <Col xl="2" lg="2" md="2" className="category-tile">
                    <img className="img-fluid" src={console}  />
                        <div className="title">Gaming</div>
                </Col> */}
                {/* <Col xl="2" lg="2" md="2" className="category-tile">
                    <img className="img-fluid" src={book}  />
                        <div className="title">BOOKS/NOVELS</div>
                </Col>
                <Col xl="2" lg="2" md="2" className="category-tile">
                    <img className="img-fluid" src={watch}  />
                        <div className="title">WATCHES</div>
                </Col> */}
                
        </Row>
        )
    }
    loadProducts = (cat) =>{ console.log('test');
        this.props.history.push(`/category/${cat.name}/${cat.id}`);
    };
}



export default withRouter(ImageCategory);