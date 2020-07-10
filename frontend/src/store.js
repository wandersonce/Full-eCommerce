import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
    productList: productListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //* It will check if you have the extension Redux_DevTolls if not will use the compose itself.
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;