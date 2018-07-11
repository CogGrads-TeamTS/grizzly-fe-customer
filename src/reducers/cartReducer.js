import * as types from '../actions/actionTypes';

export function cart(state = {cartIsActive: false}, action) {
    switch (action.type) {
        case types.LOAD_CART_SUCCESS:
            return {
                ...state,
                cart: action.data
            }
        case types.ADD_CART_ITEM_SUCCESS:
            return {
                ...state,
                cart: action.data,
                cartIsActive: true
            }

        case types.UPDATE_CART_ITEM_SUCCESS:
            return {
                ...state,
                cart: action.data
            }

        case types.REMOVE_CART_ITEM_SUCCESS:
            return {
                ...state,
                cart: action.data
            }
        case types.OPEN_CART_TOGGLED:
            return {
                ...state,
                cartIsActive: action.data
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