import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './Auth/Auth'
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();
const auth = new Auth();


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App auth={auth}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
