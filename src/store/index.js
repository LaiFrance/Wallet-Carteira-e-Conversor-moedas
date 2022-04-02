import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers';

const mainReducer = combineReducers({ listReducer });

const store = createStore(mainReducer);
console.log(store);

export default store;
