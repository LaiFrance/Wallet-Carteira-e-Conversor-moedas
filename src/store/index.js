// estado global
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // função
import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
