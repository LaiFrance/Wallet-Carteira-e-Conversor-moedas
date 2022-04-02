// import user from './user';
// import wallet from './wallet';
import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
// sempre vai receber o estado e a adição
// const INITIAL_STATE = [];

const listReducer = combineReducers({ user, wallet });

/* {
  switch (action.type) {
  case 'ADD ELEMENT':
    return [...state, action.value]; // add novo elemento ao estado
  default:
    return state;
  }
} */

export default listReducer;
