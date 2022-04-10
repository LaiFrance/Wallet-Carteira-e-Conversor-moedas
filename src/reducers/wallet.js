// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {

  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCY_ACTION': return state;
  case 'CURRENCY_ACTION_SUCCESS': return {
    ...state,
    currencies: action.currencies,
  };
    /* currencies: action.currencies,
      expenses: action.expenses, */
  default:
    return state;
  }
}

export default walletReducer;
