// import user from './user';
// import wallet from './wallet';
import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
// sempre vai receber o estado e a adição
// recebe as actions alterando ou não o estado global

const listReducer = combineReducers({ user, wallet });

export default listReducer;
