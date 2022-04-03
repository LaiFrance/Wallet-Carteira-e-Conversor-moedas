// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {

  email: 'alguem@email.com',

};

const emailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'VALID_EMAIL':
    return {
      ...state,
      email: 'alguem@email.com',
    };
  default:
    return state;
  }
};

export default emailReducer;
