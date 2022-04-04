// Coloque aqui suas actions
const EMAIL_ACTION = 'EMAIL_ACTION';

export const validaEmail = (email) => ({ type: EMAIL_ACTION, email }); // ESTRUTURA DO OBJETO

export default validaEmail;

export const REQUEST_CURRENCY_ACTION = 'CURRENCY_ACTION';
export const RECEIVE_CURRENCY_ACTION_SUCCESS = 'CURRENCY_ACTION_SUCCESS';
export const RECEIVE_CURRENCY_ACTION_FAILURE = 'CURRENCY_ACTION_FAILURE';

export const requestCurrencyAction = () => ({
  type: REQUEST_CURRENCY_ACTION,
});

export const receiveCurrencyActionSuccess = ({ currencies }) => ({
  type: RECEIVE_CURRENCY_ACTION_SUCCESS,
  currencies,

});

export const receiveCurrencyActionFailure = (error) => ({
  type: RECEIVE_CURRENCY_ACTION_FAILURE,
  error,
});

export const fetchCurrency = () => async (dispatch) => {
  // avisa para a aplicação que estamos iniciando o fetch
  dispatch(requestCurrencyAction());
  try {
    // faz o fetch da api
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    delete data.USDT;
    const keysData = Object.keys(data);
    dispatch(receiveCurrencyActionSuccess(keysData));
  } catch (error) {
    dispatch(receiveCurrencyActionFailure(error));
  }
};
