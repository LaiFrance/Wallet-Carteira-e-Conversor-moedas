const CURRENCY_BASE_API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencyData = async () => {
  const response = await fetch(`${CURRENCY_BASE_API}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
console.log(getCurrencyData());
export default getCurrencyData;
