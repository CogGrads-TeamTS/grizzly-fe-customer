import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage'
import Auth from './Auth/Auth';
import history from './history';
import Callback from './Callback/Callback';
import App from './App'


const Routes = (props) => {
    const auth = props.auth;
    const handleAuthentication = ({location}) => {
        if (/access_token|id_token|error/.test(location.hash)) {
          auth.handleAuthentication();
        }
    }
    return (
        <div>
            <Switch history={history}>
                <Route exact path="/" component={Homepage} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} auth={props.auth} /> 
                  }}/> 
            </Switch>
        </div>
    )
}

export default Routes;