import * as types from './actionTypes';
import axios from 'axios'

const API_URL = 'http://ts.ausgrads.academy:8765/categories';
const loadCategoriesSuccess = (data) => ({type: types.LOAD_CATEGORIES_SUCCESS, data})

const loadCategoriesLoading = (loading) => ({type: types.LOAD_CATEGORIES_LOADING, categoryIsLoading:loading});
const loadCategoriesError = (error) => ({ type: types.LOAD_CATEGORIES_ERROR, categoryHasErrored:error });

// These default values are used as data is being fetched before category is created
const PAGE_DEFAULT = 0;
const SIZE_DEFAULT = 20;
const SORT_DEFAULT = "id,desc";
const SEARCH_DEFAULT = "";

// Use default values if none are specified
export function categoriesFetchData(search = SEARCH_DEFAULT, pageNumber = PAGE_DEFAULT,
                                    size = SIZE_DEFAULT, sortParam = SORT_DEFAULT) {
    // BUILD URL

    const urlParams = `search=${search}&page=${pageNumber}&size=${size}&sort=${sortParam}`;
    //console.log("url param: " + urlParams);
    const url = `${API_URL}/page?${urlParams}`;
    //console.log(url);

    return (dispatch) => {
        dispatch(loadCategoriesLoading(true));

        const request = axios.get(url);
        request
            .then((response) => { //console.log(response)
                if (!response.status === 200) {
                    throw Error(response.statusText);
                }

                dispatch(loadCategoriesLoading(false));

                return response.data;
            })
            .then((data) => dispatch(loadCategoriesSuccess(data)))
            .catch((error) => dispatch(loadCategoriesError(error)));
    };
}