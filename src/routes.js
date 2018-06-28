import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import ProductSingle from './components/Products/ProductSingle';
import history from './history';
import Callback from './Callback/Callback';
import Login from './Auth/Login';
import Logout from './Auth/Logout';


const Routes = (props) => {
//     const auth = props.auth;
//     const handleAuthentication = ({location}) => {
//         if (/access_token|id_token|error/.test(location.hash)) {
//           auth.handleAuthentication();
//         }
//     }

          // <Route path="/callback" render={(props) => {
                //     handleAuthentication(props);
                //     return <Callback {...props} auth={props.auth} /> 
          //  }}/> 
    
    return (
        <div>
            <Switch history={history}>
                <Route exact path="/" component={Homepage} />
                 <Route path="/product/:id" component={ProductSingle} />
                 <Route path="/login" component={Login} />
                 <Route path="/logout" component={Logout} />
            </Switch>
        </div>
    )
}


export default Routes;