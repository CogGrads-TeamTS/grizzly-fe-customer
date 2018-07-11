
import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchOrders } from '../../actions/orderActions';
import OrderCard from "./OrderCard";
import { Container, Col, Row } from 'reactstrap';
import '../../App.css';

class Orders extends Component {
    componentWillMount() {
        this.props.fetchOrders();
    }
    render() {
        return (
            <div>
            <Container>
                <h1 className="lead order-heading">Your Orders</h1>
                <Row>
                {
                    this.props.orders.map(order => 
                        <Col className="order-card" xs="12" sm="12" md="12" key={order.id}>
                            <OrderCard order={order} />
                        </Col>
                    )
                }
                </Row>
            </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return{
        orders: state.orders
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: () => dispatch(fetchOrders())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);