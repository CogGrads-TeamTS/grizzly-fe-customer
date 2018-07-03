import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';
import { products, productsIsLoading } from './productReducer'
import { user, userHasErrored, userIsLoading } from './userReducer'

const rootReducer = combineReducers({
    form:formReducer, // Used for Redux Form
    products,
    productsIsLoading,
    category:category,
    categoryHasErrored:categoryHasErrored,
    categoryIsLoading:categoryIsLoading,
    user: user,
    userHasErrored: userHasErrored,
    userIsLoading: userIsLoading,
});

export default rootReducer;
