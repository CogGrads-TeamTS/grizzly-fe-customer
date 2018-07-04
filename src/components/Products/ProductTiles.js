import React from 'react';
import ProductTile from './ProductTile'
import { Col, CardDeck } from 'reactstrap';
import './ProductTiles.css';
import { Link } from 'react-router-dom';

const ProductTiles = (props) => {//console.log(props.products);
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
                            
                                <Col xs="12" sm="6" md="4" lg="3" xl="2" style={{'padding': '0px'}} className="tiles" key={product.id}>

                                    <Link to={{ pathname: `/product/${product.id}`, state: {foo: 'bar'} }}>
                                        <ProductTile product={product} 
                                                        badge={"Product"} 
                                                            cardClass="hover" 
                                                                badgeColor={"primary"} 
                                                                    text={product.name} 
                                                                        imageUrl={product.images.length > 0 ? product.images[0].url : ''}/>
                                        </Link>
                                </Col>
                            
                        )                        
                    }
                </CardDeck>
    </div>
  );
};

export default ProductTiles;