import * as types from './actionTypes';
import axios from 'axios';
import {reset} from 'redux-form';

function authHeader() {
    return { Authorization: `Bearer ${localStorage.getItem('access_token')}` }
}
const API_URL = 'http://ts.ausgrads.academy:8765/products/rating';
// const API_URL = 'http://localhost:5555/rating';

const loadRatingSuccess = (data) => ({ type: types.LOAD_RATING_SUCCESS, data });
const loadRatingError = (error) => ({ type: types.LOAD_RATING_ERROR, ratingHasErrored: error });
const loadRatingLoading = (loading) => ({ type: types.LOAD_RATING_LOADING, ratingIsLoading: loading });

export function fetchRatings(productId) {

    const url = `${API_URL}/${productId}`;
    
    return (dispatch) => {
        dispatch(loadRatingLoading(true));

        const request = axios.get(url);
        request
            .then((response) => { 
                if (!response.status === 200) {
                    throw Error(response.statusText);
                }

                dispatch(loadRatingLoading(false));

                return response.data;
            })
            .then((data) => dispatch(loadRatingSuccess(data)))
            .catch((error) => dispatch(loadRatingError(error)));
    };
}

const addRatingSuccess = (data) => ({ type: types.ADD_RATING_SUCCESS, data });
const addRatingError = (error) => ({ type: types.ADD_RATING_ERROR, ratingHasErrored: error });
const addRatingLoading = (loading) => ({ type: types.ADD_RATING_LOADING, ratingIsLoading: loading });


export function addRating(payload, pid) { 
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}/add`;
    const loggedIn = false;

    return function (dispatch) {

        payload.productId = pid;
        
        const request = axios.post(`${API_URL}/add`, payload , {headers: authHeader()});
        request
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(response.statusText);
                }
                dispatch(addRatingLoading(false));

                return response.data;
            })
            .then((data) => {
                dispatch(addRatingSuccess(data))
                dispatch(reset('ratingsForm'));
            })
            .catch((error) => {
                dispatch(addRatingError(error))
            });
    }
}