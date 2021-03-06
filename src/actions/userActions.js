import * as types from './actionTypes';
import axios from 'axios';

import config from '../config';

const API_URL = config.endpoints.user;

const loadUserSuccess = (data) => ({type: types.LOAD_USER_SUCCESS, data});
const loadUserError = (error) => ({type: types.LOAD_USER_ERROR, userHasErrored:error});
const loadUserLoading = (loading) =>({type: types.LOAD_USER_LOADING, userIsLoading:loading});

export function fetchUserByID() {
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}`;

    return function (dispatch) { 
        dispatch(loadUserLoading(true));
        const request=axios.get(url, { headers: { authorization: `Bearer ${accessToken}` } });
        request
            .then((response) =>{ 
                if(!response.status === 200)
                {
                    throw Error(response.statusText);
                }
                dispatch(loadUserLoading(false));
                 
                return response.data;
            })
            .then((data)=> 
            { 
              dispatch(loadUserSuccess(data))})
            .catch((error)=>{
              dispatch(loadUserError(error))});
    };
}