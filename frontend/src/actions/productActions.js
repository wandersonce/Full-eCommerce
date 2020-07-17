import {
    PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS
    , PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS
} from '../constants/productConstants';
import axios from 'axios';

const listProducts = () => async (dispatch) => {  //* It will make the action of get data from the backend. Using axios and try catch if we get some error.
    try {

        dispatch({ type: PRODUCT_LIST_REQUEST });

        const { data } = await axios.get("/api/products");

        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }
    catch (error) {

        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
        const { userSignin: { userInfo } } = getState();
        const { data } = await axios.post('/api/products', product, {
            headers: {
                'Authorization': 'Bearer' + userInfo.token  //* Send token to the backend
            }
        });

        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get('/api/products/' + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message })
    }
}

export { listProducts, detailsProduct, saveProduct };