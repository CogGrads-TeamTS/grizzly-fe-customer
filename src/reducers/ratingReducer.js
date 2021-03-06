import * as types from '../actions/actionTypes';

export function ratings(state = {}, action) { 
    switch (action.type) {
        case types.LOAD_RATING_SUCCESS:
            return { 
                ...state,
                ratings: action.data
            }
        case types.ADD_RATING_SUCCESS:
        
            return {
                ...state,
                ratings: [action.data.rating, ...state.ratings]
            }

        default:
            return state;
    }
}

export function ratingsIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_RATING_LOADING:
            return action.ratingIsLoading
        default:
            return state
    }
}

export function ratingsHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_RATING_ERROR:
            return action.ratingHasErrored;
        default:
            return state
    }
}