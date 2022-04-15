// Coloque aqui suas actions

export const EXPENSES = 'EXPENSES';
export const EMAIL_ACTION = 'EMAIL_ACTION';
export const REQUEST_CURRENCY_ACTION = 'CURRENCY_ACTION';
export const RECEIVE_CURRENCY_ACTION_SUCCESS = 'CURRENCY_ACTION_SUCCESS';
export const EXPENSES_ACTION = 'EXPENSES_ACTION';
export const REQUEST_ASK = 'REQUEST_ASK';
export const RECEIVE_ASK = 'RECEIVE_ASK';
export const TOTAL_EXPENSES = 'TOTAL_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const validaEmail = (email) => ({ type: EMAIL_ACTION, email }); // ESTRUTURA DO OBJETO
export const requestCurrencyAction = () => ({ type: REQUEST_CURRENCY_ACTION });
export const receiveCurrencyActionSuccess = (payload) => ({
  type: RECEIVE_CURRENCY_ACTION_SUCCESS, payload });

export const adicionaExpenses = (payload) => ({ type: EXPENSES, payload });
export const deleteExpense = (expenseId) => ({ type: DELETE_EXPENSE, expenseId });

export const fetchCurrency = () => async (dispatch) => {
  dispatch(requestCurrencyAction());
  const request = await
  fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await request.json();
  delete data.USDT;
  delete data.DOGE;
  // dispatch({ type: 'SENDINFO', payload: data });
  const keysData = Object.keys(data);
  dispatch(receiveCurrencyActionSuccess(keysData));
  return data;
};
