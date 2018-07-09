import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from './auth0-variables';
import { fetchUserByID } from '../actions/userActions';
import { connect } from 'react-redux';

class Lock extends Component {
  lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
    auth: {
      audience: 'http://localhost:6666',
      responseType: 'token id_token',
      scope: AUTH_CONFIG.scope,
      sso: false,
      params: { scope: 'openid' },
      redirect: false
    },
    theme: {
      primaryColor: '#F1A94E',
      title: "Grizzly Store",
      logo: 'https://i.imgur.com/WTynPTe.png'
    },
    allowSignUp: false,
    languageDictionary: {
      emailInputPlaceholder: "something@youremail.com",
      title: "Welcome!"
    },
    // closable: false
  });

  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.onAuthenticated = this.onAuthenticated.bind(this);

    this.onAuthenticated();
  }

  onAuthenticated() {
    this.lock.on('authenticated', (authResult) => {
      let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('expires_at', expiresAt);

      this.setState({ loggedIn: true });
      this.props.fetchUserData();

      this.lock.hide();
    });
  }

  componentDidMount() {
    if (!(/access_token|id_token|error/.test(this.props.location.hash))) {
      this.lock.show();
    }
  }

  render() {

    return (
      !this.state.loggedIn ? (
        <div>
          <div id={AUTH_CONFIG.container}></div>
        </div>
      ) : (null)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    userIsLoading: state.userIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetchUserByID())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lock);