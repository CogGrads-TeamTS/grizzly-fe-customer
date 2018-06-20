import React, { Component } from 'react'
import { Row, Col,Button} from 'reactstrap';
import CustomerSortBy from "../CustomerSortByButton/CustomerSortBy";

class Homepage extends Component {

    render() {
        return (
            <Row>
                    <Col md="2" sm="4" xs="6">
                        <CustomerSortBy  />
                    </Col>
                    <Col md="2" sm="4" xs="6">
                        <Button outline id="btn-rounded" className="m-t-10 btn-block" color="info">Button 1</Button>
                    </Col>
                    <Col md="2" sm="4" xs="6">
                        <Button outline id="btn-rounded" className="m-t-10 btn-block" color="info">Button 1</Button>
                    </Col>
                    <Col md="2" sm="4" xs="6">
                        <Button outline id="btn-rounded" className="m-t-10 btn-block" color="info">Button 1</Button>
                    </Col>
                    <Col md="2" sm="4" xs="6">
                        <Button outline id="btn-rounded" className="m-t-10 btn-block" color="info">Button 1</Button>
                    </Col>
                    <Col md="2" sm="4" xs="6">
                        <Button outline id="btn-rounded" className="m-t-10 btn-block" color="info">Button 1</Button>
                    </Col>
            </Row>
        );
    }
}

export default Homepage;