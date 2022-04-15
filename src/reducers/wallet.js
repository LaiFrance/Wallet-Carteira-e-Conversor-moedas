// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {

  currencies: [],
  expenses: [],

};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  // case 'CURRENCY_ACTION': return state;

  case 'CURRENCY_ACTION_SUCCESS':
    return {
      ...state, currencies: action.payload };
    /* currencies: action.currencies,
      expenses: action.expenses, */
  case 'EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((element) => element.id !== action.expenseId),
    };

  // case 'SENDINFO': return {
  //   ...state,
  //   expenses: [...state.expenses, action.expenses],
  // };
  default:
    return state;
  }
}

export default walletReducer;
