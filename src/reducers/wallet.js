// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const REQUEST_EXPENSES_STATE = 'REQUEST_EXPENSES_STATE';
const INITIAL_STATE = {

  currencies: [],
  expenses: [],
  expensesState: [],
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
  case REQUEST_EXPENSES_STATE:
    return {
      ...state,
      expensesState: action.expensesState,
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((element) => element.id !== action.expenseId),
    };
  // case 'RECEIVE_ASK': return {
  //   ...state,
  //   expenses: [...state.expenses, action.expenses],
  // };
  default:
    return state;
  }
}

export default walletReducer;
