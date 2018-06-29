import * as types from '../actions/actionTypes';

export function category(state = {}, action) {
    // console.log(action.type);
    switch (action.type) {
        case types.LOAD_CATEGORIES_SUCCESS:
            // create array from fetched data from database
            const catArray = action.data.content;
            const isFirst = action.data.first;
            const last = action.data.last;
            // create a new copy of the current state
            return {
                ...state,
                content: (!isFirst ? [ ...state.content, ...catArray] : catArray),
                isFirst,
                last
            };
        default:
            return state
    }
}

export function categoryIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_CATEGORIES_LOADING:
            return action.categoryIsLoading
        default:
            return state
    }
}

export function categoryHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_CATEGORIES_ERROR:
            return action.categoryHasErrored
        default:
            return state
    }
}