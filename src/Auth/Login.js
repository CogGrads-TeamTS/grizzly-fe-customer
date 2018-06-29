import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Lock from './Lock';
import isAuthenticated from './isAuthenticated';
import Homepage from '../components/Homepage/Homepage';

const Login = (props) => (
  isAuthenticated() ? (
    <Redirect to={{
      pathname: '/',
      state: { from: props.location }
    }} />
  ) : (
    <div>
      <Lock location={props.location} />
      <Homepage />
    </div>
  )
)

export default Login;