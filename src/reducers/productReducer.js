import * as types from '../actions/actionTypes';

export function products(state = {}, action) {
    switch(action.type) {
        case types.LOAD_PRODUCTS_SUCCESS:
            const productArray = action.data.products.content;
            const productFirst = action.data.products.first;
            const productLast = action.data.products.last;
            //const selected = undefined;
            const filterByCat = action.data.filterCats;
            const filterBrand = action.data.filterBrands;
            const filterRating = action.data.filterRatings;
            console.log(action.data);
           //console.log(productArray)

            return {
                ...state,
                content: (!productFirst ? [ ...state.content, ...productArray] : productArray),
                productFirst,
                last: productLast,
               // selected,
                filterByCat,
                filterBrand,
                filterRating
            };
        
            case types.LOAD_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                selected: action.data
            };

            case types.LOAD_SINGLE_PRODUCT_IMAGE_SUCCESS:
            return {
                ...state,
                images:action.data
            };

        default:
            return state;
    }
}

export function productsIsLoading(state = false, action) {
  //  console.log("IS LOADING")
    switch (action.type) {
        case types.LOAD_PRODUCTS_LOADING:
            return action.productsIsLoading;
    default:
    return state
}
}

export function singleProductImageIsLoading(state = false, action) {
    switch (action.type) {
        case types.LOAD_SINGLE_PRODUCT_IMAGE_LOADING:
            return action.productIsLoading
        default:
            return state
    }
}

export function singleProductImageHasErrored(state = false, action) {
    switch (action.type) {
        case types.LOAD_SINGLE_PRODUCT_IMAGE_ERROR:
            return action.productHasErrored
        default:
            return state
    }
}
