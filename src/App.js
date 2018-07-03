import React, { Component } from 'react';
import Routes from './routes';
import { Row, Col, Container } from 'reactstrap';
import './App.css';
import Header from './components/Common/CommonHeader';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Row className="user-header">
          <div className="nav-user-row">
            <Header location={this.props.location} />
          </div>
        </Row>

        <Container fluid>
          <Row className="main">
              <Col xs="12">
                <Routes />
              </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
