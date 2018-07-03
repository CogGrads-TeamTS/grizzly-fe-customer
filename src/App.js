import React, { Component } from 'react';
import Routes from './routes';
import { Row, Col } from 'reactstrap';
import './App.css';
import Header from './components/Common/CommonHeader';

class App extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
        <Row>
            <Col xs="12">
              <Routes />
            </Col>
        </Row>
    );
  }
}

export default App;
