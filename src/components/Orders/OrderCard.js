import React from 'react';
import { Container, Col, Row, Card, CardTitle, CardBody } from 'reactstrap';
const imageUrl = 'http://ts.ausgrads.academy/images/';

const OrderCard = (props) => {
    const products = props.order.products.map(product =>
        <Row>
            <Col xs="2">
                <img width="100%" src={product.imageUrl ? `${imageUrl}${product.imageUrl}`: '' }/>
            </Col>
            <Col xs="8">
                <p>{product.name}</p>
                <p>
                    Qty: {product.qty}
                </p>
            </Col>
            <Col xs="2">
                <p className="text-info">${product.totalPrice}</p>
            </Col>
        </Row>
    );
    return (
        <div>
            <Card style={{'padding': '15px'}}>
                <CardTitle>
                    <p className="lead">Order #{props.order.id}</p>
                </CardTitle>
                <CardBody>
                    {products}
                </CardBody>
            </Card>
        </div>
    )
}

export default OrderCard;