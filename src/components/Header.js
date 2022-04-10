import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends React.Component {
  /*  componentDidMount() {
    // requisição da API

  } */

  render() {
    const { email, expenses, currencies } = this.props;
    const currenciesArr = Object.values(currencies);
    return (
      <header className="container-header">
        <h1>TrybeWallet</h1>
        <p data-testid="email-field" className="email-field">
          {' '}
          { email }
        </p>
        expenses:
        {expenses.length > 0 ? (<p data-testid="total-field" />)
          : (<p data-testid="total-field">0</p>)}
        MOEDA:
        <p data-testid="header-currency-field">BRL</p>
        <input
          name="currencies"
          type="text"
        />
        <select
          name="currency"
          data-testid="currency-input"
          arial-label="moeda"
          value="0"
        >
          {
            currenciesArr.map((coin, index) => (
              <option
                key={ index }
                data-testid={ coin }
                value="0"
              >
                {coin}
              </option>))
          }
        </select>
        ))
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
});

Header.propTypes = {
  email: Proptypes.string,
}.isRequired;

/* // usar o Thunk api
const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyprops: () => dispatch(fetchCurrency()),
}); */
export default connect(mapStateToProps)(Header);
