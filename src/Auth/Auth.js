import auth0 from 'auth0-js';

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
            window.location = "/"
          } else if (err) {
            window.location = "/"
            console.log(err);
          }
        });
      }
    
      setSession(authResult) {
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        window.location = "/"
      }
    
      logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        window.location = "/"
      }
    
      isAuthenticated() {
        console.log('local storage ' + localStorage)
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
      }
  }