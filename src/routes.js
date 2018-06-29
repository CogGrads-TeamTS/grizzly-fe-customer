import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import ProductSingle from './components/Products/ProductSingle';
import history from './history';
import Login from './Auth/Login';
import Logout from './Auth/Logout';


const Routes = (props) => {
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