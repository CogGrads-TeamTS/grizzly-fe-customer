import React, { Component } from 'react';
import { Col, Container, Button, Row } from 'reactstrap';
import isAuthenticated from '../../Auth/isAuthenticated'
import RateProductForm from '../RateProductForm';
import { Link } from 'react-router-dom';

const RateProduct = (props) => {
    return(
        <Container>
            <Row>
                {
                    !isAuthenticated() && (
                        <Link to="/login">
                            <Button>Log in to leave a review</Button>
                        </Link>
                    )
                }
               
                {
                    isAuthenticated() && (
                    
                     <RateProductForm onSubmit={props.onSubmit} />
                    )
                }
                    
     
                
            </Row>
        </Container>
    );
}

export default RateProduct;