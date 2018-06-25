import React from 'react';
import { CardGroup, Card, CardTitle, CardText, CardImg, CardImgOverlay, Fade, Button, CardSubtitle, CardBody, CardLink, Badge, UncontrolledTooltip  } from 'reactstrap';
import './ProductTile.css';
import _ from 'lodash'

const ProductTile = (props) => {
    // tooltip ids
    const tileId = props.product ? props.product.id : props.id;
    const tooltip_price = `price_${tileId}`;
    const tooltip_brand = `brand_${tileId}`;
    const imageUrl = 'http://ts.ausgrads.academy/images/';
  return (
    <div className="tile m-t-20">
        <Fade>
            <Card className={props.cardClass}>
            <CardImg style={{"width": "100%"}} src={`${imageUrl}${props.imageUrl}`} alt="Card image cap" />
            
            <CardBody>
                <CardTitle>{props.text}</CardTitle>
                {props.badge && <Badge color={props.badgeColor}>{props.badge}</Badge>}
                {
                    props.product &&
                    <Badge color={"success"} id={tooltip_price}>${props.product.price}</Badge>
                }
                {
                    props.product &&
                    <Badge color={"secondary"} id={tooltip_brand}>{props.product.brand}</Badge>
                }
                {
                    props.product && 
                    <UncontrolledTooltip placement="bottom" target={`${tooltip_brand}`}>
                        Brand
                    </UncontrolledTooltip>
                }
                {
                    props.product && 
                    <UncontrolledTooltip placement="bottom" target={`${tooltip_price}`}>
                        Price
                    </UncontrolledTooltip>
                }
            </CardBody>
            </Card>
        </Fade>
    </div>
  );
};

export default ProductTile;