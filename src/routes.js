import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import CustomerSortByView from "./components/CustomerSortByButton/CustomerSortByView";

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/:name/:id" component={CustomerSortByView} />
        </Switch>
    </div>
)

export default Routes;