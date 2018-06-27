import * as types from '../actions/actionTypes';

export function products(state = {}, action) {
    switch(action.type) {
        case types.LOAD_PRODUCTS_SUCCESS:
           // console.log(action.type);
            const productArray = action.data.products.content;
            const productFirst = action.data.products.first;
            const productLast = action.data.products.last;
            const selected = undefined;
            const filterByCat = action.data.filterCats;
            const filterBrand = action.data.filterBrands;
            const filterRating = action.data.filterRatings;
            //console.log(action.data);
           //console.log(productArray)

            return {
                ...state,
                content: (!productFirst ? [ ...state.content, ...productArray] : productArray),
                productFirst,
                last: productLast,
                selected,
                filterByCat,
                filterBrand,
                filterRating
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