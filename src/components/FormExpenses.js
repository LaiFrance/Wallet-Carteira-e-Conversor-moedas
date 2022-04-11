import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';
// A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.
class FormExpenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      isButtonDisabled: true,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrency());
  }

  handleInputValue=({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value }, () => this.verify());
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addFormToState } = this.props;
    const { id, value, currency, method, tag, description } = this.state;
    const inputData = { id, value, currency, method, tag, description };

    addFormToState(inputData);
    this.setState({ value: '', description: '', id: '' });
  }

  verify = () => {
    const { method, tag } = this.state;
    if (method === 'payment'
      || tag === 'TAG') this.setState({ isButtonDisabled: true });
    else { this.setState({ isButtonDisabled: false }); }
  }

  render() {
    const {
      props: {
        currenciesArry,
      },
      state: {
        value,
        currency,
        description,
        method,
        tag,
        isButtonDisabled,
      },
      handleInputValue,
      handleSubmit } = this;

    return (
      <section>
        <form onSubmit={ handleSubmit }>

          <span>Valor da Despesa:</span>
          <input
            id=""
            name="value"
            data-testid="value-input"
            type="text"
            onChange={ handleInputValue }
            value={ value }

          />

          <span>Descrição:</span>
          <input
            id=""
            name="description"
            data-testid="description-input"
            type="text"
            onChange={ handleInputValue }
            value={ description }

          />
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="currency"
              data-testid="currency-input"
              onChange={ this.handleInputValue }
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
            onChange={ handleInputValue }
            value={ method }
          >
            Pagamento
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          <select
            name="tag"
            data-testid="tag-input"
            onChange={ handleInputValue }
            value={ tag }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>

          <button
            type="button"
            value="Adicionar despesa"
            onClick={ handleSubmit }
            disabled={ isButtonDisabled }
          >
            Adicionar despesa
          </button>
          <button
            type="button"
            onClick=""
            name="editButton"
            value="Editar despesa"
            data-testid="edit-btn"
          >
            Editar despesa
          </button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesArry: state.wallet.currencies,
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  totalExpenses: state.wallet.totalExpenses,
});

FormExpenses.propTypes = {
  addFormToState: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  currenciesArry: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addFormToState: (data) => dispatch(fetchCurrency(data)),
  fetchCurrency: () => dispatch(fetchCurrency()),
  dispatch: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
