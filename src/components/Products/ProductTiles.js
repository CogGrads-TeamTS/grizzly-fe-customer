import React, { Component } from 'react';
import ProductTile from './ProductTile'
import { Col, CardDeck } from 'reactstrap';
import './ProductTiles.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { addProductToCart } from '../../actions/cartActions';
import Filter from '../Common/filter';

class ProductTiles extends Component {
    render() {
        let colOffset = "";
        return (
            <div className="flexed">
                <Filter products={this.props.products} />
                <CardDeck className="flex-grow-1 right-side-content">
                    {
                        this.props.main &&
                        <Col style={{ 'padding': '0px' }} key={this.props.main.text}>
                            <ProductTile id={this.props.main.id} badge={this.props.main.badge} badgeColor={this.props.main.badgeColor} text={this.props.main.text} imageUrl={this.props.main.imageUrl} />
                        </Col>
                    }
                    {
                        this.props.products.map((product, i) => {
                            {
                                if (i === 0 && this.props.type === 'sale') {
                                    colOffset = "offset-md-2";

                                }
                                else if (this.props.type === 'sale' || (i === 0 && this.props.type === 'featured')) {
                                    colOffset = this.props.colOffset;
                                }
                                else if (this.props.type === 'featured') {
                                    colOffset = "";
                                }

                            }
                            return (
                                <Col style={{ 'padding': '0px' }} style={this.props.customStyle} className={`tiles ${colOffset}`} key={product.id}>
                                    <Link to={{ pathname: `/product/${product.id}`, state: { foo: 'bar' } }}></Link>
                                    <ProductTile product={product}
                                        badge={"Product"}
                                        cardClass="hover"
                                        badgeColor={"primary"}
                                        text={product.name}
                                        imageUrl={product.images.length > 0 ? product.images[0].url : ''}
                                        addToCart={this.props.addToCart} />

                                </Col>
                            )
                        }
                        )
                    }
                </CardDeck>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (pid) => dispatch(addProductToCart(pid))
    };
};

export default connect(null, mapDispatchToProps)(ProductTiles);