import React from 'react';
import { Redirect } from 'react-router-dom';

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
      {console.log(props.location)}
      <Lock location={props.location} />
      <Homepage />
    </div>
  )
)

export default Login;