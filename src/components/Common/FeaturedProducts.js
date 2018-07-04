import React, {Component} from 'react';
import './styles/Featuredproducts.css';
import {Row, Col} from 'reactstrap';

class FeaturedProducts extends Component{
    
    ratedcatArray = () =>{
        for(var i = 0; i <= this.props.length; i++){
            console.log('test');
        } 
    }

    componentDidMount(){
        this.ratedcatArray();
    }
    render(){ if(this.props.products){console.log(this.props.length)}
        
        return(
            <Row className="featured-row">
                <Col md="12" className="featured-col offset-md-1" >
                    <div className="featured-toolbar">
                        <div className="featured-toolbar-title">
                            <span>FEATURED PRODUCT</span>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}


export default FeaturedProducts;