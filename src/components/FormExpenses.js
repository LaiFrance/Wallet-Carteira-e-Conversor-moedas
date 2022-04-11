import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency, createState } from '../actions';
// A tabela deve possuir um cabeçalho com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.
class FormExpenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Valor: '',
      descrição: '',
      Moeda: '',
      MétodoDePagamento: '',
      Categoria: '',

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

  handleChanger = ({ target }) => {
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
  onClickButtonAddExpense = () => {
    const { dispatch } = this.props;
    dispatch(createState(this.state));
    console.log('click');
  }

  render() {
    const {
      props: {
        currenciesArry,
      },
      state: {
        Valor,
        descrição,
        Moeda,
        MétodoDePagamento,
        Categoria,
      },
      handleChanger,
      handleSubmit } = this;

    return (
      <section>
        <form onSubmit={ handleSubmit }>

          <span>Valor da Despesa:</span>
          <input
            id=""
            name="Valor"
            data-testid="value-input"
            type="text"
            onChange={ handleChanger }
            value={ Valor }

          />

          <span>Descrição:</span>
          <input
            id=""
            name="descrição"
            data-testid="description-input"
            type="text"
            onChange={ handleChanger }
            value={ descrição }

          />
          <label htmlFor="currency">
            Moeda:
            <select
              id="currency"
              name="Moeda"
              data-testid="currency-input"
              onChange={ handleChanger }
              arial-label="moeda"
              value={ Moeda }
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
            name="MétodoDePagamento"
            data-testid="method-input"
            onChange={ handleChanger }
            value={ MétodoDePagamento }
          >
            Pagamento
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>

          Categoria
          <select
            name="Categoria"
            data-testid="tag-input"
            onChange={ handleChanger }
            value={ Categoria }
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
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesArry: state.wallet.currencies,
  email: state.user.email,
  currencies: state.wallet.currencies,
  expensesState: state.wallet.expensesState,
  totalExpenses: state.wallet.totalExpenses,
});

FormExpenses.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currenciesArry: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addFormToState: (data) => dispatch(fetchCurrency(data)),
  fetchCurrency: () => dispatch(fetchCurrency()),
  dispatch: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
