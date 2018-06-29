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
const BRAND = "";
const RATING = "";

export function productsFetchData(search=SEARCH,pageNumber=FIRST_PAGE,size=DEFAULT_PAGE_SIZE,sortParam=NO_PARAM, catId=CATEGORY,
                                  brand=BRAND,rating=RATING){

    const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}&category=${catId}&brand=${brand}&rating=${rating}`;
    const url = `${API_URL}/page?${urlParams}`;
    console.log(url);
    return function (dispatch) {
        // get data from external data source
        dispatch(loadProductsLoading(true));
        const request=axios.get(url);
        request
            .then((response) =>{ //console.log(response);
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


const loadSingleProductSuccess = (data) => ({type: types.LOAD_SINGLE_PRODUCT_SUCCESS, data});
const loadSingleProductError = (error) => ({type: types.LOAD_SINGLE_PRODUCT_ERROR, singleProductHasErrored:error});
const loadSingleProductLoading = (loading) =>({type: types.LOAD_SINGLE_PRODUCT_LOADING, singleProductIsLoading:loading});

export function productFetchDataByID(id){

     const url = `${API_URL}/${id}`;
     return function (dispatch) {
         dispatch(loadSingleProductLoading(true));
         const request=axios.get(url);
         request
             .then((response) =>{ 
                 if(!response.status === 200)
                 {
                     throw Error(response.statusText);
                 }
                 dispatch(loadSingleProductLoading(false));
                 return response.data;
             })
             .then((data)=>dispatch(loadSingleProductSuccess(data)))
             .catch((error)=>dispatch(loadSingleProductError(error)));
     }
 }

 const loadSingleProductImageSuccess = (data) => ({type: types.LOAD_SINGLE_PRODUCT_IMAGE_SUCCESS, data});
const loadSingleProductImageError = (error) => ({type: types.LOAD_SINGLE_PRODUCT_IMAGE_ERROR, singleProductImageHasErrored:error});
const loadSingleProductImageLoading = (loading) =>({type: types.LOAD_SINGLE_PRODUCT_IMAGE_LOADING, singleProductImageIsLoading:loading});

 export function productFetchImagesByID(id){

     const url = `${API_URL}/${id}/images`; 

     return function (dispatch) {
         
         dispatch(loadSingleProductImageLoading(true));
         const request=axios.get(url);
         request
             .then((response) =>{ console.log(response);
                 if(!response.status == 200)
                 {
                     throw Error(response.statusText);
                 }
                 dispatch(loadSingleProductImageLoading(false));
                 return response.data;
             })
             .then((data)=>dispatch(loadSingleProductImageSuccess(data)))
             .catch((error)=>dispatch(loadSingleProductImageError(error)));
     }
 }
