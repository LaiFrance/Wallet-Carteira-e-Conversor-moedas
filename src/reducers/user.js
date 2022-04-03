// Esse reducer será responsável por tratar as informações da pessoa usuária
import { Login } from '../pages/Login';

const INITIAL_STATE = {

  email: '',

};

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default emailReducer;
