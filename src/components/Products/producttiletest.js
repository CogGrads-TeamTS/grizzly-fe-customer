import React, { Component } from 'react';
import './product.css';
import { Row, Col } from 'reactstrap';
import {connect } from 'react-redux';


class producttiletest extends Component{

    render(){console.log(this.props)
        return(
            <Row>
                    <div> test</div>
            
            </Row>
        )
    };
}


export default producttiletest;