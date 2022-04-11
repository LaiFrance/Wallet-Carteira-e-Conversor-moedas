const EXPENSES_DATA = [{
  id: '',
  value: '',
  description: '',
  currency: '',
  method: '',
  tag: '',
  exchangeRates: {},
}];

function expenseReducer(state = EXPENSES_DATA, action) {
  return state;
}

export default expenseReducer;
