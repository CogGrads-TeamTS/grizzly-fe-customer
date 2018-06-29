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
      <div className="container-fluid no-padding">
        <Row className="user-header">
          <div className="nav-user-row">
            <Col xs="12">
              <Header location={this.props.location} />
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
