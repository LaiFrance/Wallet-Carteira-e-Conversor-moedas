import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './index.css';
import { deleteExpense } from '../actions';
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

      <table>
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </thead>
        <tbody>
          {expenses.map(({
            index,
            id,
            description,
            tag,
            method,
            value,
            exchangeRates,
            currency }) => {
            const exchange = Number(exchangeRates[currency].ask);

            return (
              <tr key={ index }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{exchange.toFixed(2)}</td>
                <td>{(exchange * value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => dispatch(deleteExpense(id)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
ExpensesTable.propTypes = {
  expenses: PropTypes.string,
}.isRequired;
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  expensesState: state.wallet.expensesSTate,
});
export default connect(mapStateToProps)(ExpensesTable);
