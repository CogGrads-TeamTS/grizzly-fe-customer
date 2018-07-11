import * as types from './actionTypes';
import axios from 'axios';

import config from '../config';

const API_URL = config.endpoints.order;

const loadOrdersSuccess = (data) => ({type: types.LOAD_ORDERS_SUCCESS, data});
const loadOrdersError = (error) => ({type: types.LOAD_ORDERS_ERROR, ordersHasErrored:error});
const loadOrdersLoading = (loading) =>({type: types.LOAD_ORDERS_LOADING, ordersIsLoading:loading});

export function fetchOrders() {
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}`;

    return function (dispatch) { 
        dispatch(loadOrdersLoading(true));
        const request=axios.get(url, { headers: { authorization: `Bearer ${accessToken}` } });
        request
            .then((response) =>{ 
                if(!response.status === 200)
                {
                    throw Error(response.statusText);
                }
                dispatch(loadOrdersLoading(false));
                 
                return response.data;
            })
            .then((data)=> 
            { 
              dispatch(loadOrdersSuccess(data))
            })
            .catch((error)=>{
              dispatch(loadOrdersError(error))
            });
    };
}