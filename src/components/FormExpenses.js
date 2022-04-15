import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from '../actions';
// A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.
class FormExpenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',

    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrency());
  }

  // handleInputValue=({ target }) => {
  //   const { value, name } = target;
  //   this.setState({ [name]: value }, () => this.verify());
  // }

  handleChange = ({ target }) => {
    this.setState((previusState) => ({
      ...previusState,
      [target.name]: target.value,
    }));
  }

  //  handleSubmit = (e) => {
  //    e.preventDefault();
  //    const { addFormToState } = this.props;
  //    const { Valor, descrição, Moeda, MétodoDePagamento, Categoria } = this.state;
  //    const inputData = { Valor, descrição, Moeda, MétodoDePagamento, Categoria };

  //    addFormToState(inputData);
  //    this.setState({ value: '', description: '', id: '' });
  //  }

  //  verify = () => {
  //    const { method, tag } = this.state;
  //    if (method === 'payment'
  //     || tag === 'TAG') this.setState({ isButtonDisabled: true });
  //    else { this.setState({ isButtonDisabled: false }); }
  //  }
  onClickButtonAddExpense = async () => {
    const { dispatch, expenses } = this.props;
    // console.log(expenses);
    const { value, currency, method, tag, description } = this.state;
    // console.log(value, currency, method, tag, description);
    const request = await
    fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    delete data.USDT;
    delete data.DOGE;

    fetchCurrency();
    // console.log(currentExchange);
    dispatch({
      type: 'EXPENSES',
      payload: {
        id: expenses.length,
        value,
        currency,
        method,
        tag,
        description,
        exchangeRates: data,
      },
    });
    this.setState((prevState) => ({
      ...prevState,
      value: '0',
      description: '',
    }
    ));
  };

  render() {
    const {
      props: {
        currenciesArry,
      },
      state: {
        value,
        currency,
        method,
        tag,
        description,
      },
      handleChange } = this;

    return (
      <div>
        <form>
          <label htmlFor="valueInput">
            <span>Valor:</span>
            <input
              id="valueInput"
              name="value"
              data-testid="value-input"
              type="number"
              onChange={ handleChange }
              value={ value }
            />
          </label>
          <label htmlFor="description-input">
            <span>Descrição:</span>
            <input
              id="description-input"
              name="description"
              data-testid="description-input"
              type="text"
              onChange={ handleChange }
              value={ description }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="currency"
              data-testid="currency-input"
              onChange={ handleChange }
              arial-label="currency"
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
          <span>Pagamento:</span>
          <select
            name="method"
            data-testid="method-input"
            onChange={ handleChange }
            value={ method }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <label htmlFor="tag-input">
            Categoria
            <select
              id="tag-input"
              name="tag"
              data-testid="tag-input"
              onChange={ handleChange }
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Trasporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            type="button"
            value="Adicionar despesa"
            onClick={ this.onClickButtonAddExpense }
          >
            Adicionar despesa
          </button>
          {/* <button
            type="submit"
            onClick={ handleSubmit }
            name="editButton"
            value="Editar despesa"
            data-testid="edit-btn"
          >
            Editar despesa
          </button> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesArry: state.wallet.currencies,
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

FormExpenses.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currenciesArry: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
//   // fetchCurrency: () => dispatch(adicionaExpenses()),
//   dispatch: () => dispatch(fetchCurrency()),
// });

export default connect(mapStateToProps)(FormExpenses);
