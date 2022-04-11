import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchCurrency } from '../actions';

class ExpensesTable extends Component {
  convert = (coin, baseCoin) => parseFloat(coin * baseCoin).toFixed(2)

  render() {
    const { expenses } = this.props;
    return (
      <table className="ExpenseTable">
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
            <button
              type="button"
              onClick=""
              name="deleteButton"
              data-testid="delete-btn"
            >
              Excluir
            </button>

          </tr>
        </thead>

        <tbody>
          {expenses.map((element) => (
            <tr key={ element.id }>
              <td>{element.description}</td>
              <td>{element.tag}</td>
              <td>{element.method}</td>
              <td>{ parseFloat(element.value).toFixed(2) }</td>
              <td>{element.exchangeRates[element.currency].name}</td>
              <td>
                {parseFloat(element.exchangeRates[element.currency].ask).toFixed(2)}
              </td>
              <td>
                { this.convert(element.value,
                  element.exchangeRates[element.currency].ask)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    );
  }
}
ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
