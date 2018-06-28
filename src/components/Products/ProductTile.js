import React from 'react';
import { Card, CardTitle, CardImg, Fade, CardBody, Badge, UncontrolledTooltip  } from 'reactstrap';
import './ProductTile.css';


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
                {/* <CardTitle>{props.text}</CardTitle> */}
                {props.badge && <Badge color={props.badgeColor} className="badge-badge">{props.badge}</Badge>}
                {
                props.product &&
                    <Badge color={"success"} className="badge-price" id={tooltip_price}>${props.product.price}</Badge>
                }
                {
                    props.product &&
                    <Badge color={"secondary"} className="badge-brand" id={tooltip_brand}>{props.product.brand}</Badge>
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