import React from 'react';
import ProductTile from './ProductTile'
import { Container, Row, Col, CardDeck, Fade } from 'reactstrap';

const ProductTiles = (props) => {
    function mainTile() {
        if (!props.main) return null;
        const product = props.main;
        return (<Col xs="2">
            <ProductTile key={product.id} product={product}/>
        </Col>)
    }
  return (
    <div>
                <CardDeck>
                {
                    props.products.map(product =>
                        <Col xs="2" style={{'padding': '0px'}} key={product.id}>
                            <ProductTile product={product}/>
                        </Col>
                    )
                }
                </CardDeck>
    </div>
  );
};

export default ProductTiles;