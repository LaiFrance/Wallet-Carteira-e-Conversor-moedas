import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state ={
    currency: 'BRL',
  }

  render() {
    const { email, expenses } = this.props;
    const { currency } = this.state;
    return (
      <div>
        <header className="container-header">
          <h1>TrybeWallet</h1>
          <p data-testid="email-field" className="email-field">
            {' '}
            { email }
          </p>
          <p data-testid="total-field">
            {
              (expenses.reduce((acc, { exchangeRates, currency, value }) => (
                Number(acc) + (Number(exchangeRates[currency].ask) * value)), 0))
                .toFixed(2)
            }
          </p>
          <p />
          <h3 data-testid="header-currency-field">{currency}</h3>
        </header>
      </div>
    );
  }
}
Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  totalExpended: state.wallet.totalExpenses,
});

// usar o Thunk api
// const mapDispatchToProps = (dispatch) => ({
//   fetchCurrencyprops: () => dispatch(fetchCurrency()),
// });
export default connect(mapStateToProps)(Header);
