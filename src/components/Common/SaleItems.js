import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import './ImageCategory.css';
import sale from './../AdBanner/category-images/sale.png';
const SalesItems = () => {
    return(
    <Row className="sale-row">
	
                
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
				<img className="img-fluid" src={sale}  />
			</div>
		</Col>
        <Col md="4" className="center-align">
			<div class="image-centered">
				<img className="img-fluid" src={sale}  />
			</div>
		</Col>
        <Col md="4" className="center-align">
			<div class="image-centered">
				<img className="img-fluid" src={sale}  />
			</div>
		</Col>
	</Row>
    );
}

export default SalesItems;