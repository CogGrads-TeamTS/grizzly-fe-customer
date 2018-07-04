import React from 'react';
import { Card, CardTitle, CardImg, Fade, CardBody, Badge, UncontrolledTooltip  } from 'reactstrap';
import {Button, Row, Col} from 'reactstrap';
import './ProductTile.css';
import StarRatings from 'react-star-ratings';


const ProductTile = (props) => { console.log(props)
    const tileId = props.product ? props.product.id : props.id;
    const tooltip_price = `price_${tileId}`;
    const tooltip_brand = `brand_${tileId}`;
    const imageUrl = 'http://ts.ausgrads.academy/images/';
  return (
            <div>
                <div style={{height: "140px"}}>
                
                <img className="img-fluid img-fluid-tile" src={`${imageUrl}${props.imageUrl}`} style={{maxWidth: "150px"}} />
                </div>
                <div className="props-text">{props.text}</div>
               <div className="tile-parent">
                    <div className="price">${props.product.price}.00</div>
                    <div className="discount">SAVE {props.product.discount}%</div>
                </div>
                <div className="star-cont">
                <StarRatings 
                                    rating={props.product.rating}
                                    numberOfStars={5}
                                    changeRating={false}
                                    name='rating'
                                    starDimension="20px"
                                    starSpacing="2px"
                                    starRatedColor='rgb(108, 116, 217)'
                                /></div>
                <Button color="primary" className="add-btn">ADD TO CART</Button>
            </div>
  );
};

export default ProductTile;