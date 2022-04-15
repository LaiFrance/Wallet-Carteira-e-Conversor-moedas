import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './index.css';
import { deleteExpense } from '../actions';
// import FormExpenses from './FormExpenses';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchCurrency } from '../actions';

class ExpensesTable extends Component {
  constructor() {
    super();
    this.state = {
      Categoria: '',
      Moeda: '',
      MétodoDePagamento: '',
      Valor: '',
      descrição: '',
    };
  }

  conversor = (coin, baseCoin) => parseFloat(coin * baseCoin).toFixed(2)

  handleChanger = ({ target }) => {
    this.setState((previusState) => ({
      ...previusState,
      [target.name]: target.value,
    }));
  }

  render() {
    const { expenses, dispatch } = this.props;
    return (
      <table className="blueTable">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.length > 0 && expenses.map((elem) => (
            <tr key={ `${elem.id}` }>
              <td>{elem.description}</td>
              <td>{elem.tag}</td>
              <td>{elem.method}</td>
              <td>{Number(elem.value).toFixed(2)}</td>
              <td>
                {
                  elem.exchangeRates[elem.currency].name
                }
              </td>
              <td>{(Number(elem.exchangeRates[elem.currency].ask).toFixed(2))}</td>
              <td>
                {(Number(elem.value) * Number(elem.exchangeRates[elem.currency].ask))
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                  onClick={ () => dispatch((elem.id)) }
                >
                  Editar Despesa
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => dispatch(deleteExpense(elem.id)) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
ExpensesTable.propTypes = {
  expenses: PropTypes.array,
}.isRequired;
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
