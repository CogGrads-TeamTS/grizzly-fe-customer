import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';
import { products } from './productReducer'

const rootReducer = combineReducers({
    form:formReducer, // Used for Redux Form
    products,
    category:category,
    categoryHasErrored:categoryHasErrored,
    categoryIsLoading:categoryIsLoading,
});

export default rootReducer;
