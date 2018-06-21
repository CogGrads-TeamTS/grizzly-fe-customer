import React from 'react';
import { CardGroup, Card, CardTitle, CardText, CardImg, CardImgOverlay, Fade, Button, CardSubtitle } from 'reactstrap';
import './ProductTile.css';

const ProductTile = (props) => {

  
  return (
    <div className="tile">
        <Fade>
            <Card inverse>
            <CardImg style={{"width": "100%"}} src="http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg" alt="Card image cap" />
            
            {!props.main && 
                <CardImgOverlay>
                <CardTitle>{props.product.name}</CardTitle>
                <CardText>
                    ${props.product.price}
                </CardText>
                <CardText className="d-xl-none">
                    <small>{props.product.description}</small>
                </CardText>
                
                </CardImgOverlay>
            }
            </Card>
        </Fade>
    </div>
  );
};

export default ProductTile;