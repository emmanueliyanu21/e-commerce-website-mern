import { createStore, combineReducers } from 'redux';

const initState = {};
const reducer = combineReducers({
    productList: productListReducer,
})
const store = createStore(reducer, initState)