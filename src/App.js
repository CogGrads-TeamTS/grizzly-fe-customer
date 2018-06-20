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
        <Row className="user-header">
          <div className="nav-user-row">
            <Col xs="12">
              <Header />
            </Col>
          </div>
        </Row>
        <Row className="main">
            <Col xs="12">
              <Routes />
            </Col>
        </Row>
      </div>
    );
  }
}

export default App;
