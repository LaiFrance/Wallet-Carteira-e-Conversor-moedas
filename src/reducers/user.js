// Esse reducer será responsável por tratar as informações da pessoa usuária
const EMAIL_ACTION = 'EMAIL_ACTION';

const INITIAL_STATE = {

  email: '',

};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_ACTION:
    return {
      email: action.email,
    };
  default: return state;
  }
};

export default user;
