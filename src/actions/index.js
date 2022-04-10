// Coloque aqui suas actions
const EMAIL_ACTION = 'EMAIL_ACTION';
const REQUEST_CURRENCY_ACTION = 'CURRENCY_ACTION';
const RECEIVE_CURRENCY_ACTION_SUCCESS = 'CURRENCY_ACTION_SUCCESS';
const EXPENSES_ACTION = 'EXPENSES_ACTION';
// const RECEIVE_CURRENCY_COIN= 'CURRENCY_COIN';
// const RECEIVE_CURRENCY_ACTION_FAILURE = 'CURRENCY_ACTION_FAILURE';
export const validaEmail = (email) => ({ type: EMAIL_ACTION, email }); // ESTRUTURA DO OBJETO

const requestCurrencyAction = () => ({
  type: REQUEST_CURRENCY_ACTION,

});

export const receiveCurrencyActionSuccess = (currencies) => ({
  type: RECEIVE_CURRENCY_ACTION_SUCCESS,
  currencies,
});

export const expensesAction = (expense) => ({
  type: EXPENSES_ACTION,
  expense,
});

// const receiveCoin = (coin) => ({
//   type: RECEIVE_CURRENCY_COIN,
//   coin,
// });

/* const receiveCurrencyActionFailure = (error) => ({
  type: RECEIVE_CURRENCY_ACTION_FAILURE,
  error,
}); */

export const fetchCurrency = () => async (dispatch) => {
  // avisa para a aplicação que estamos iniciando o fetch
  dispatch(requestCurrencyAction());
  // faz o fetch da api
  const request = await
  fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await request.json();
  delete data.USDT;
  const keysData = Object.keys(data);
  dispatch(receiveCurrencyActionSuccess(keysData));
  // console.log(keysData);
  // console.log(data);
  // ['USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP', 'DOGE']
};
