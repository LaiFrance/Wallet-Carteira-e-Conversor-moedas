const CURRENCY_BASE_API = 'https://economia.awesomeapi.com.br';

const getCurrencyData = async () => {
  const response = await fetch(`${CURRENCY_BASE_API}/json/all`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurrencyData;
