import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CustomerSortByView from "./components/CustomerSortByButton/CustomerSortByView";
import ProductSingle from './components/Products/ProductSingle';
import history from './history';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Homepage from './components/Homepage/Homepage';
import Checkout from './components/Checkout/Checkout';
import CategoriesView from './components/Categories/CategoriesView';
const Routes = () => {
    return (
        <div>
            <Switch history={history}>
                <Route exact path="/" render={(props)=><Layout><Homepage {...props}/></Layout>} />
                <Route path="/product/:id" render={(props)=><Layout><ProductSingle {...props}/></Layout>} />
                <Route path="/category/:catname/:id" render={(props)=><Layout><CustomerSortByView {...props}/></Layout>} />
                <Route path="/brand/:name" render={(props)=><Layout><CustomerSortByView {...props}/></Layout>} />
                <Route path="/rating/:rating" render={(props)=><Layout><CustomerSortByView {...props}/></Layout>} />
                <Route path="/categories" render={(props)=><Layout><CategoriesView {...props}/></Layout>} />
                <Route path="/login" render={(props)=><Layout><Login {...props}/></Layout>} />
                <Route path="/checkout" render={(props)=><Layout><Checkout {...props}/></Layout>} />
                <Route path="/logout" component={Logout} />
            </Switch>
        </div>
    )
}


export default Routes;