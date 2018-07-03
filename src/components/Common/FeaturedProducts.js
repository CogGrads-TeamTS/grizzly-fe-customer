import React, {Component} from 'react';
import './ImageCategory.css';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

class ImageCategory extends Component{
    
    ratedcatArray = () =>{
        for(var i = 0; i <= this.props.length; i++){
            console.log('test');
        } 
    }

    componentDidMount(){
        this.ratedcatArray();
    }
    render(){ if(this.props.categories){console.log(this.props.length)}
        
        return(
            <Row style={{marginTop: "35px"}}>
                <Col  md="12" className=" offset-md-1" >
                    <div className="cat-toolbar">
                        <div className="cat-title">
                            <span>FEATURED PRODUCT</span>
                        </div>
                    </div>
                </Col>
                
                {/* {
                    (_.isEmpty(this.props.categories) ?
                    (
                        <Col>
                            There are no categories to display.
                        </Col>
                    ) : (
                        _.map(_.take(Object.values(this.props.categories),5), (cat,i) => { console.log(i)
                            
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
                } */}
                {/* <Col xl="2" lg="2" md="2" sm="7" className="category-tile offset-md-1 offset-sm-2">
                    <img className="img-fluid" src={watch}  />
                        <div className="title">WATCHES</div>
                </Col>
                <Col xl="2" lg="2" md="2" className="category-tile">
                    <img className="img-fluid" src={camera}  />
                        <div className="title">CAMERAS</div>
                </Col>
                <Col xl="2" lg="2" md="2" className="category-tile">
                    <img className="img-fluid" src={console}  />
                        <div className="title">Gaming</div>
                </Col>
                <Col xl="2" lg="2" md="2" className="category-tile">
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
}


export default ImageCategory;