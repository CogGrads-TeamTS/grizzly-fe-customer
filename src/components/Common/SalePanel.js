import React, { Component } from 'react';
import './styles/SalePanel.css';
import {Row, Col} from 'reactstrap';
import snow from "./../../assets/snow.png";

const SalesPanel = () => {
    return(
        <Row className="sale-panel">
            <div> </div>
	            <div id="flakes" class="flakes">
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
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
		            <Col md="4" className="center-align">
			            <div class="image-centered">
				            <img className="img-fluid" src={snow}  />
			            </div>
		            </Col>
        
                <Col md="4" className="center-align">
			        <div class="image-centered">
				        <img className="img-fluid" src={snow}  />
			        </div>
		        </Col>

                <Col md="4" className="center-align">
                    <div class="image-centered">
                        <img className="img-fluid" src={snow}  />
                    </div>
                </Col>
	    </Row>
    );
}

export default SalesPanel;