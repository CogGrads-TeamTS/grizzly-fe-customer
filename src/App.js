import React, { Component } from 'react';
import Routes from './routes';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

import Header from './components/Common/CommonHeader';

class App extends Component {
  render() {
    return (
      <div className="container-fluid no-padding">
        <div className="header">
          <Row className="nav-row">
            <Col xs="12">
              <Header />
            </Col>
          </Row>
        </div>
        <div className="main">
          <Row>
            <Col xs="12">
              <Routes />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
