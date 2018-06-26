import React from 'react';
import ProductTile from './ProductTile'
import { Container, Row, Col, CardDeck, Fade } from 'reactstrap';
import './ProductTiles.css';

const ProductTiles = (props) => {
  return (
    <div>
                <CardDeck>
                    {
                        props.main && 
                        <Col xs="12" sm="6" md="4" lg="3" xl="2" style={{'padding': '0px'}} key={props.main.text}>
                            <ProductTile id={props.main.id} badge={props.main.badge} badgeColor={props.main.badgeColor} text={props.main.text} imageUrl={props.main.imageUrl}/>
                        </Col>
                    }
                    {   
                        props.products.map(product =>
                            <Col xs="12" sm="6" md="4" lg="3" xl="2" style={{'padding': '0px'}} key={product.id}>
                                <ProductTile product={product} badge={"Product"} cardClass="hover" badgeColor={"primary"} text={product.name}  imageUrl={product.images.length > 0 ? product.images[0].url : ''} />
                            </Col>
                        )                        
                    }
                </CardDeck>
    </div>
  );
};

export default ProductTiles;