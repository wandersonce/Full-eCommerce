import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || []; // Get cookies from to determine your cart

const initialState = { cart: { cartItems } };
const reducer = combineReducers({   //* Just using the function from reducers and using with a different name.
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //* It will check if you have the extension Redux_DevTolls if not will use the compose itself.
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;