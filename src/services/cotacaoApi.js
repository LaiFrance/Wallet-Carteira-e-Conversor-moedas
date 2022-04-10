const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const cotacaoApi = () => fetch(API_URL).then((response) => response.json());

export default cotacaoApi;

console.log(cotacaoApi());
