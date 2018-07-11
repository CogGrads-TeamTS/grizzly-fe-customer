import React from 'react';
import { Card, CardTitle, CardImg, Fade, CardBody, Badge, UncontrolledTooltip } from 'reactstrap';
import { Button, Row, Col } from 'reactstrap';
import './ProductTile.css';
import StarRatings from 'react-star-ratings';
import { Textfit } from 'react-textfit';
import { Link } from 'react-router-dom';


const ProductTile = (props) => {
    const tileId = props.product ? props.product.id : props.id;
    const tooltip_price = `price_${tileId}`;
    const tooltip_brand = `brand_${tileId}`;
    const imageUrl = 'http://ts.ausgrads.academy/images/';
    const addToCart = () => {
        props.addToCart(props.product.id);
    }
    
    const display = !props.display ? "" : props.display;
    
    return (

        <div>
            <Link to={{ pathname: `/product/${props.product.id}`, state: { foo: 'bar' } }}>
                <div style={{ height: "140px" }}>

                    <img className="img-fluid img-fluid-tile" src={`${imageUrl}${props.imageUrl}`} style={{ maxWidth: "150px" }} />
                </div>
                <div className="props-text">
                    <Textfit
                        mode="single"
                        forceSingleModeWidth={false}>
                        {props.text}
                    </Textfit>
                </div>
                <div className="tile-parent">
                    <div className="price">${props.product.price}</div>
                    {(props.product.discount > 0 ? <div className="discount">SAVE {props.product.discount}%</div> : null)}
                </div>
                <div className="star-cont" style={{display: `${display}`}}>
                    <StarRatings 
                        rating={props.product.rating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor='rgb(108, 116, 217)'
                        isSelectable={false}
                    /></div>
                </Link>
                
                <Button color="primary" className="add-btn btn-primary-griz" style={{display: `${display}`}} onClick={addToCart}>ADD TO CART</Button>
            </div>
  );
};

export default ProductTile;