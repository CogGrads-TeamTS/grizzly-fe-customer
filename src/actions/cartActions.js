import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/products/cart';

const loadCartSuccess = (data) => ({ type: types.LOAD_CART_SUCCESS, data });
const loadCartError = (error) => ({ type: types.LOAD_CART_ERROR, cartHasErrored: error });
const loadCartLoading = (loading) => ({ type: types.LOAD_CART_LOADING, cartIsLoading: loading });

export function fetchCart(loggedIn) {
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}`;

    return function (dispatch) {
        dispatch(loadCartLoading(true));
        let request;
        if (loggedIn)
            request = axios.get(url, { headers: { authorization: `Bearer ${accessToken}` } });
        else
            request = axios.get(url, {
                method: "get",
                withCredentials: true
            }
            );

        request
            .then((response) => {
                if (!response.status === 200) {
                    console.log("Get Request failed")
                    throw Error(response.statusText);
                }
                dispatch(loadCartLoading(false));

                return response.data;
            })
            .then((data) => {
                console.log(data);
                dispatch(loadCartSuccess(data))
            })
            .catch((error) => {
                dispatch(loadCartError(error))
            });
    };
}

const addCartItemSuccess = (data) => ({ type: types.ADD_CART_ITEM_SUCCESS, data });
const addCartItemError = (error) => ({ type: types.ADD_CART_ITEM_ERROR, cartHasErrored: error });
const addCartItemLoading = (loading) => ({ type: types.ADD_CART_ITEM_LOADING, cartIsLoading: loading });

export function addProductToCart(pid) {
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}/${pid}`;
    const loggedIn = false;

    return function (dispatch) {
        // Change request based on user logged in
        let request;
        if (loggedIn) request = axios.post(url, { headers: { authorization: `Bearer ${accessToken}` } })
        else request = axios(url, {
            method: "post",
            withCredentials: true
        })

        dispatch(addCartItemLoading(true));
        request
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(response.statusText);
                }
                dispatch(addCartItemLoading(false));

                return response.data;
            })
            .then((data) => {
                dispatch(addCartItemSuccess(data))
            })
            .catch((error) => {
                dispatch(addCartItemError(error))
            });
    }
}