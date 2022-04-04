export const REQUEST_CURRENCY_ACTION = 'CURRENCY_ACTION';
export const RECEIVE_CURRENCY_ACTION_SUCCESS = 'CURRENCY_ACTION_SUCCESS';
export const RECEIVE_CURRENCY_ACTION_FAILURE = 'CURRENCY_ACTION_FAILURE';

export const requestCurrencyAction = () => ({
  type: REQUEST_CURRENCY_ACTION,
});

export const receiveCurrencyActionSuccess = ({ wallet }) => ({
  type: RECEIVE_CURRENCY_ACTION_SUCCESS,
  currencies: wallet.currencies,
  expenses: wallet.expenses,

});

export const requestCurrencyActionFailure = () => ({
  type: RECEIVE_CURRENCY_ACTION_FAILURE,
  error,
});
