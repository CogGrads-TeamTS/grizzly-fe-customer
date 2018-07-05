import * as types from '../actions/actionTypes';

export function cart(state = {}, action){
    switch (action.type){
        case types.LOAD_CART_SUCCESS:
        console.log(action.data);
            return {
                ...state,
                cart: action.data
            }

        default:
            return state;
    }
}

export function cartIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_CART_LOADING:
            return action.cartIsLoading
        default:
            return state
    }
}

export function cartHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_CART_ERROR:
            return action.cartHasErrored;
        default:
            return state
    }
}