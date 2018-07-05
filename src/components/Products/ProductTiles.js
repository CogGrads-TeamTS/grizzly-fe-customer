import React from 'react';
import ProductTile from './ProductTile'
import { Col, CardDeck } from 'reactstrap';
import './ProductTiles.css';
import { Link } from 'react-router-dom';

const ProductTiles = (props) => {
    let colOffset = "";
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
                        props.products.map((product,i) =>{
                                {
                                    if(i === 0 && props.type === 'sale'){
                                       colOffset = "offset-md-2";

                                    }else if(props.type === 'sale'){
                                        colOffset = "offset-md-1";
                                    }

                                }
                                return(
                                <Col xs="12" sm="6" md="4" lg="3" xl="2" style={{'padding': '0px'}} style={props.customStyle} className={`tiles ${colOffset}`} key={product.id}>
                                    <Link to={{ pathname: `/product/${product.id}`, state: {foo: 'bar'} }}>
                                        <ProductTile product={product} 
                                                        badge={"Product"} 
                                                            cardClass="hover" 
                                                                badgeColor={"primary"} 
                                                                    text={product.name} 
                                                                        imageUrl={product.images.length > 0 ? product.images[0].url : ''}/>
                                        </Link>
                                </Col>
                                )}
                        )                        
                    }
                </CardDeck>
    </div>
  );
};

export default ProductTiles;