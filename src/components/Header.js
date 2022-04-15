import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';

class Header extends React.Component {
  // state ={
  //   currency: 'BRL',
  // }

  render() {
    const { email, expenses } = this.props;
    // const { currency } = this.state;
    const myDespesas = expenses.map(({ currency, value, exchangeRates }) => (
      Number(value) * Number(exchangeRates[currency].ask)));
    return (
      <header className="container-header">
        <h1>TrybeWallet</h1>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">
          {
            expenses.length > 0
              ? myDespesas.reduce((elemx, elemy) => (elemx + elemy)).toFixed(2)
              : 0
          }
        </div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}
Header.propTypes = ({
  email: PropTypes.string,
  expenses: PropTypes.arrayOf(string),
}).isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

// usar o Thunk api
// const mapDispatchToProps = (dispatch) => ({
//   fetchCurrencyprops: () => dispatch(fetchCurrency()),
// });
export default connect(mapStateToProps)(Header);
