import * as types from '../actions/actionTypes';

export function orders(state = [], action) {
    switch(action.type) {
        case types.LOAD_ORDERS_SUCCESS:
            return [...action.data];
        default:
            return state;
    }
}