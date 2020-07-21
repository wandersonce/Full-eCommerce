import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || []; // Get cookies from to determine your cart
const userInfo = Cookie.getJSON("userInfo") || null; //* It will check if the user is logged

const initialState = { cart: { cartItems: [], shipping: {}, payment: {} }, userSignin: { userInfo } };
const reducer = combineReducers({   //* Just using the function from reducers and using with a different name.
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //* It will check if you have the extension Redux_DevTolls if not will use the compose itself.
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store; 