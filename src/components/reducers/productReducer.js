import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCT_BY_ID } from '../actions/action-types/product-actions';

const initState = {
    loading: false,
    error: null,
    items: []
}
const productReducer = (state = initState, action) => {

    if (action.type === FETCH_PRODUCT_BY_ID) {
        return {
            ...state,
            payload: action.product,
            loading: false
        }
    }
    if (action.type === FETCH_PRODUCTS_BEGIN) {
        return {
            ...state,
            loading: true,
            error: null
        };
    }
    if (action.type === FETCH_PRODUCTS_SUCCESS) {
        return {
            ...state,
            loading: false,
            items: action.payload.products
        };
    }
    if (action.type === FETCH_PRODUCTS_FAILURE) {
        return {
            ...state,
            loading: false,
            error: action.payload.error,
            items: []
        };
    }
    else {
        return state
    }
}

export default productReducer