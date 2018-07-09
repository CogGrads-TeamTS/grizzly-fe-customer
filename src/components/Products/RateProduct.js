import React, { Component } from 'react';
import { Col, Container, Button, Row } from 'reactstrap';
import isAuthenticated from '../../Auth/isAuthenticated'

import RateProductForm from '../RateProductForm';
import { Link } from 'react-router-dom';

const RateProduct = (props) => {
    return(
        <Container>
            <Row>{console.log(props)}
            {/* <RateProductForm submitRating={props.submitRating}/> */}
                <Col md="12"><span className="review-title">Customer Reviews</span></Col>
                {
                    !isAuthenticated() && (
                        <Link to="/login">
                            <Button>Log in to leave a review</Button>
                        </Link>
                    )
                }
               
                {
                    isAuthenticated() && (
                    
                     <RateProductForm />
                    )
                }
                    
     
                
            </Row>
        </Container>
    );
}

export default RateProduct;