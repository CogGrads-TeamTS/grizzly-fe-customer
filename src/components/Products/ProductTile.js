import React from 'react';
import { CardGroup, Card, CardTitle, CardText, CardImg, CardImgOverlay, Fade, Button, CardSubtitle, CardBody, CardLink, Badge  } from 'reactstrap';
import './ProductTile.css';

const ProductTile = (props) => {
  return (
    <div className="tile">
        <Fade>
            <Card >
            <CardImg style={{"width": "100%"}} src={props.imageUrl} alt="Card image cap" />
            
            <CardBody>
                <CardTitle>{props.text}</CardTitle>
                {props.badge && <Badge color={props.badgeColor}>{props.badge}</Badge>}
            </CardBody>
            
            </Card>
        </Fade>
    </div>
  );
};

export default ProductTile;