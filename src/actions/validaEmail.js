// Coloque aqui suas actions
import { VALID_EMAIL } from '../tests/helpers/constants';

export const validaEmail = (email) => ({ type: VALID_EMAIL, email }); // ESTRUTURA DO OBJETO

export default validaEmail;
