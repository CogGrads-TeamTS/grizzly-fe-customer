import React from 'react';
import { Badge, Container, Col, Row, Card, CardTitle, CardBody } from 'reactstrap';
import '../../App.css';

const imageUrl = 'http://ts.ausgrads.academy/images/';


const OrderCard = (props) => {
    const products = props.order.products.map(product =>
        <div>
            <Row>
                <Col xs="2">
                    <img width="100%" src={product.imageUrl ? `${imageUrl}${product.imageUrl}`: '' }/>
                </Col>
                <Col xs="6">
                    <p>{product.name}</p>
                    <p>Qty: {product.qty}</p>
                </Col>
                <Col xs="2">
                    <h5><Badge color="light" pill>${product.totalPrice}</Badge></h5>
                </Col>
            </Row>
            <hr />
        </div>
    );
    return (
        <div>
            <Card className="order-card" >
                <CardTitle className="lead order-title">
                    <p className="inline">Order #{props.order.id}</p>
                    <Badge className="inline order-status" pill color="primary">{props.order.status}</Badge>
                    <p className="inline order-date">Order Placed: {props.order.date}</p>
                </CardTitle>
                <CardBody className="order-card-body">
                    {products}
                    <p className="inline">Shipping address: {props.order.shippingAddress}</p>
                    <p className="total inline">Total Price: ${props.order.totalPrice}</p>
                </CardBody>      
            </Card>
        </div>
    )
}

export default OrderCard;