import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { category, categoryHasErrored, categoryIsLoading } from './categoryReducer';
import { products, productsIsLoading } from './productReducer'
import { user, userHasErrored, userIsLoading } from './userReducer'
import {cart, cartHasErrored, cartIsLoading} from "./cartReducer"
import {global, globalHasErrored,globalIsLoading} from "./globalReducer";
import { orders } from './orderReducer';

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
    cart: cart,
    cartHasErrored, cartHasErrored,
    cartIsLoading: cartIsLoading,
    global: global,
    globalHasErrored:globalHasErrored,
    globalIsLoading:globalIsLoading,
    orders: orders
});

export default rootReducer;
