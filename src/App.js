import React, { Component } from 'react';
import Routes from './routes';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

import Header from './components/Common/CommonHeader';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="header">
          <div className="nav-row">
            <Col xs="12">
              <Header />
            </Col>
          </div>
        </div>
        <div className="main">
              <Routes />
        </div>
      </div>
    );
  }
}

export default App;
