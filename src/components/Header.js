import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends React.Component {
  state ={
    inicialExpense: 0,
    currency: 'BRL',
  }

  render() {
    const { email, expenses, totalExpended } = this.props;
    const { currency, inicialExpense } = this.state;
    return (
      <div>
        <header className="container-header">
          <h1>TrybeWallet</h1>
          <p data-testid="email-field" className="email-field">
            {' '}
            { email }
          </p>
          <h3 data-testid="total-field">
            Despesas:
            {expenses.length !== 0 ? totalExpended : inicialExpense }
          </h3>

          MOEDA:
          <h3 data-testid="header-currency-field">{currency}</h3>
        </header>
      </div>
    );
  }
}
Header.propTypes = {
  email: Proptypes.string.isRequired,
  totalExpended: Proptypes.number.isRequired,
  expenses: Proptypes.arrayOf(Proptypes.array).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  totalExpended: state.wallet.totalExpenses,
});

// // usar o Thunk api
// const mapDispatchToProps = (dispatch) => ({
//   fetchCurrencyprops: () => dispatch(fetchCurrency()),
// });
export default connect(mapStateToProps)(Header);
