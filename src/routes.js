import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import CustomerSortByView from "./components/CustomerSortByButton/CustomerSortByView";
import ProductSingle from './components/Products/ProductSingle';
import history from './history';
import Login from './Auth/Login';
import Logout from './Auth/Logout';


const Routes = () => {
    return (
        <div>
            <Switch history={history}>
                <Route exact path="/" component={Homepage} />
                <Route path="/product/:id" component={ProductSingle} />
                <Route path="/category/:catname/:id" component={CustomerSortByView} />
                <Route path="/brand/:name" component={CustomerSortByView} />
                <Route path="/rating/:rating" component={CustomerSortByView} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
            </Switch>
        </div>
    )
}


export default Routes;