import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const initialState = {};
const reducer = combineReducers({   //* Just using the function from reducers and using with a different name.
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //* It will check if you have the extension Redux_DevTolls if not will use the compose itself.
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;