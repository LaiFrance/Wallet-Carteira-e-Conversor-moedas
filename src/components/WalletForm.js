import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';
// A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.
class WalletForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      currency: 'USD',
      method: 'payment',
      tag: 'TAG',
      description: '',
      isButtonDisabled: true,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrency());
  }

  handleChange=({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value }, () => this.verifySelect());
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { addFormToState } = this.props;
    const { value, currency, method, tag, description } = this.state;
    const inputData = { value, currency, method, tag, description };

    addFormToState(inputData);
    this.setState({ value: '0', description: '' });
  }

  verifySelect = () => {
    const { method, tag } = this.state;
    if (method === 'payment'
      || tag === 'TAG') this.setState({ isButtonDisabled: true });

    else this.setState({ isButtonDisabled: false });
  }

  render() {
    const {
      value,
      currency,
      description,
      method,
      tag,
      isButtonDisabled,
      handleChange,
      handleSubmit } = this.state;
    const { currencies } = this.props;
    const currenciesArry = Object.values(currencies);

    return (
      <section>
        <form onSubmit={ handleSubmit }>

          <span>Valor:</span>
          <input
            id=""
            name="value"
            data-testid="value-input"
            type="number"
            onChange={ handleChange }
            value={ value }

          />

          <span>Descrição:</span>
          <input
            name="description"
            data-testid="description-input"
            type="text"
            onChange={ handleChange }
            value={ description }

          />
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              name="currency"
              data-testid="currency-input"
              onChange={ handleChange }
              arial-label="moeda"
              value={ currency }
            >
              { currenciesArry.map((coin, index) => (
                <option
                  key={ index }
                  data-testid={ coin }
                  value={ coin }
                >
                  {coin}
                </option>))}
            </select>
          </label>

          <select
            name="method"
            data-testid="method-input"
            onChange={ handleChange }
            value={ method }
          >
            <option
              value="payment"
              disabled
            >
              Pagamento
            </option>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select
            name="tag"
            data-testid="tag-input"
            onChange={ handleChange }
            value={ tag }
          >
            <option
              value="TAG"
              disabled
            >
              TAG
            </option>

            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>

          <input
            type="submit"
            value="Adicionar despesa"
            onClick={ handleSubmit }
            disabled={ isButtonDisabled }
          />
        </form>
      </section>
    );
  }
}

WalletForm.propTypes = {
  addFormToState: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object).isRequired,

};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  totalExpenses: wallet.totalExpenses,
});

export default connect(mapStateToProps)(WalletForm);
