import * as types from './actionTypes';
import axios from 'axios';

const API_URL = 'http://ts.ausgrads.academy:8765/products';

const loadProductsSuccess = (data) => ({type: types.LOAD_PRODUCTS_SUCCESS, data});
const loadProductsError = (error) => ({type: types.LOAD_PRODUCTS_ERROR, productsHasErrored:error});
const loadProductsLoading = (loading) =>({type: types.LOAD_PRODUCTS_LOADING, productsIsLoading:loading});

// default pagination values
const FIRST_PAGE = 0;
const DEFAULT_PAGE_SIZE = 20;
const NO_PARAM = "id,desc";
const SEARCH = "";
const CATEGORY = "";

export function productsFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM, catId=CATEGORY){

    const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}&category=${catId}`;
    const url = `${API_URL}/page?${urlParams}`;
    console.log("URL: " + url);
    return function (dispatch) {
        // get data from external data source
        dispatch(loadProductsLoading(true));
        const request=axios.get(url);
        request
            .then((response) =>{ console.log(response);
                if(!response.status == 200)
                {
                    throw Error(response.statusText);
                }
                dispatch(loadProductsLoading(false));
                return response.data;
            })
            .then((data)=>dispatch(loadProductsSuccess(data)))
            .catch((error)=>dispatch(loadProductsError(error)));
    }
}