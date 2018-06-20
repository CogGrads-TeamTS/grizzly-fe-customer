import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { products } from './productReducer'

const rootReducer = combineReducers({
    form:formReducer, // Used for Redux Form
    products
});

export default rootReducer;
