import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/products/cart';

const loadCartSuccess = (data) => ({type: types.LOAD_CART_SUCCESS, data});
const loadCartError = (error) => ({type: types.LOAD_CART_ERROR, cartHasErrored:error});
const loadCartLoading = (loading) =>({type: types.LOAD_CART_LOADING, cartIsLoading:loading});

export function fetchCart(loggedIn) {
    console.log("Fetch worked correctly")
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}`;

    return function (dispatch) { 
        dispatch(loadCartLoading(true));
        let request;
        if(loggedIn)
        request=axios.get(url, { headers: { authorization: `Bearer ${accessToken}` } });
        else
        request=axios.get(url);

        request
            .then((response) =>{ 
                if(!response.status == 200)
                {
                    console.log("Get Request failed")
                    throw Error(response.statusText);
                }
                dispatch(loadCartLoading(false));
                 
                return response.data;
            })
            .then((data)=> 
            { console.log(data);
              dispatch(loadCartSuccess(data))})
            .catch((error)=>{
              dispatch(loadCartError(error))});
    };
}