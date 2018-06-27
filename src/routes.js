import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import ProductSingle from './components/Products/ProductSingle';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/product/:id" component={ProductSingle} />
        </Switch>
    </div>
)

export default Routes;