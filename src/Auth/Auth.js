import auth0 from 'auth0-js';
import history from '../history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'blakehowe96.au.auth0.com',
    clientID: 'pjcQ3jWE4nsDU55f8WNsI0abAjkO8Zj0',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'http://localhost:6666',
    responseType: 'token id_token',
    scope: 'openid read:users'
  });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
      }
    
      login() {
        this.auth0.authorize();
      }

      handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
            // history.replace('');
            window.location = "/"
          } else if (err) {
            // history.replace('');
            window.location = "/"
            console.log(err);
          }
        });
      }
    
      setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        console.log('local storage ' + authResult.accessToken)
        // history.replace('');
        window.location = "/"
      }
    
      logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        // history.replace('');
        window.location = "/"
      }
    
      isAuthenticated() {
        // Check whether the current time is past the 
        // Access Token's expiry time
        console.log('local storage ' + localStorage)
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
      }
  }