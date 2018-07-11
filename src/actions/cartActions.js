import * as types from './actionTypes';
import axios from 'axios';

import config from '../config';

const API_URL = config.endpoints.cart;

const loadCartSuccess = (data) => ({ type: types.LOAD_CART_SUCCESS, data });
const loadCartError = (error) => ({ type: types.LOAD_CART_ERROR, cartHasErrored: error });
const loadCartLoading = (loading) => ({ type: types.LOAD_CART_LOADING, cartIsLoading: loading });

export function fetchCart(loggedIn) {
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}`;

    return function (dispatch) {
        dispatch(loadCartLoading(true));
        let headers = {};
        if (loggedIn) headers = { authorization: `Bearer ${accessToken}` };

        const request = axios(url, {
            method: "get",
            withCredentials: true,
            headers
        });

        request
            .then((response) => {
                if (!response.status === 200) {
                    
                    throw Error(response.statusText);
                }
                dispatch(loadCartLoading(false));

                return response.data;
            })
            .then((data) => {
                
                dispatch(loadCartSuccess(data))
            })
            .catch((error) => {
                dispatch(loadCartError(error))
            });
    };
}

const addCartItemSuccess = (data) => ({ type: types.ADD_CART_ITEM_SUCCESS, data });
const addCartItemError = (error) => ({ type: types.ADD_CART_ITEM_ERROR, cartHasErrored: error });
const addCartItemLoading = (loading) => ({ type: types.LOAD_CART_LOADING, cartIsLoading: loading });

export function addProductToCart(pid) {
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}/${pid}`;
    const loggedIn = false;

    return function (dispatch) {

        dispatch(addCartItemLoading(true));
        // Change request based on user logged in
        let headers = {};
        if (loggedIn) headers = { authorization: `Bearer ${accessToken}` };

        const request = axios(url, {
            method: "post",
            withCredentials: true,
            headers
        });
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

const updateCartItemSuccess = (data) => ({ type: types.UPDATE_CART_ITEM_SUCCESS, data });

export function updateCartItemQty(pid, qty) {
    const url = `${API_URL}/${pid}?qty=${qty}`;
    return function(dispatch) {
        const request = axios(url, {
            method: "put",
            withCredentials: true
        });

        request.then((response) => {
            if (!response.status === 200) {
                throw Error(response.statusText);
            }
            dispatch(updateCartItemSuccess(response.data))
        })
    }
}

const removeCartItemSuccess = (data) => ({ type: types.REMOVE_CART_ITEM_SUCCESS, data });
const removeCartItemError = (error) => ({ type: types.REMOVE_CART_ITEM_ERROR, cartHasErrored: error });
const removeCartItemLoading = (loading) => ({ type: types.LOAD_CART_LOADING, cartIsLoading: loading });

export function removeCartItem(pid) {
    const accessToken = localStorage.getItem('access_token');
    const url = `${API_URL}/${pid}`;
    const loggedIn = false;

    return function (dispatch) {
        dispatch(removeCartItemLoading(true));
        // Change request based on user logged in
        let headers = {};
        if (loggedIn) headers = { authorization: `Bearer ${accessToken}` };

        const request = axios(url, {
            method: "delete",
            withCredentials: true,
            headers
        });
        request
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(response.statusText);
                }
                dispatch(removeCartItemLoading(false));

                return response.data;
            })
            .then((data) => {
                dispatch(removeCartItemSuccess(data))
            })
            .catch((error) => {
                dispatch(removeCartItemError(error))
            });
    }
}


const openCartToggled = (data) => ({ type: types.OPEN_CART_TOGGLED, data });
export function toggleCart(isOpen) {
    return function (dispatch) {
        dispatch(openCartToggled(isOpen));
    }
}