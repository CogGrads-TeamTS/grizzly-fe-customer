import React, { Component } from 'react';
import './styles/SalePanel.css';
import {Row, Col} from 'reactstrap';
import snow from './../../assets/snow.png';
import _ from 'lodash';
import ProductTile from './../Products/ProductTile';
import ProductTiles from './../Products/ProductTiles';
import { Link } from 'react-router-dom';

const SalesPanel = (props) => {
    const discountedItems = [];

    const buildDiscount = () => { 
        if(!props.products){
            return discountedItems;
        }
        _.map(_.shuffle(Object.values(props.products)), (product,i) => { 
            if(discountedItems.length >= 3) return discountedItems;
            
            if(product.discount <= 30  && product.discount > 0){
                discountedItems.push(product);
            }
        })
        return discountedItems;
    };

    const colOffset = "offset-md-1";

    const customStyle = {
        backgroundColor: "#fff",
        border: "1px solid #cccccc",
        boxShadow: "0 8px 16px -4px #222",
        minHeight: "360px"
    }

    return(
        <Row className="sale-panel">
            <div> </div>
	            <div id="flakes" className="flakes">
                    {/* <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i> */}
                        <i className="snow-1024px"></i><i className="snow-1024px"></i><i className="snow-1024px"></i>
                        <i className="snow-1280px"></i><i className="snow-1280px"></i>
                        <i className="snow-1366px"></i><i className="snow-1366px"></i>
                        <i className="snow-1440px"></i>
                        <i className="snow-1600px"></i><i className="snow-1600px"></i>
                        <i className="snow-1800px"></i><i className="snow-1800px"></i>
                        <i className="snow-1920px"></i><i className="snow-1920px"></i>
                <div></div>
            </div>
            <Col className="sale-title" md="12">WINTER SALE</Col>
                <Col className="sale-sub" md="12">UP TO 30% OFF</Col>
                <div style={{width: "99%", margin: "25px 0 25px 0"}}>
                
                    <ProductTiles products={buildDiscount()} colOffset={colOffset} customStyle={customStyle} type="sale"/></div>

            {/* {
                _.map(buildDiscount(), product => { console.log(product)
                    return(
                        <Col md="4" key={product.id}>

                                    <Link to={{ pathname: `/product/${product.id}`, state: {foo: 'bar'} }}>
                                    <Col md="4" className="center-align">
                        <ProductTile product={product} />
			            <div className="image-centered">
				            <img className="img-fluid" src={product.images.length > 0 ? `http://ts.ausgrads.academy/images/${product.images[0].url}` : ''}  />
			            </div>
		            </Col>
                                        </Link>
                                </Col>
                        
                    )
                        
                    
            })
        } */}

		            
	    </Row>
    );
}

export default SalesPanel;