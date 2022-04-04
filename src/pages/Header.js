import React from 'react';
import './wallet.css';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

class Header extends React.Component {
  /*  componentDidMount() {
    // requisição da API

  } */

  render() {
    const { email, despesas } = this.props;
    return (
      <header className="container-header">
        <h1>TrybeWallet</h1>
        <p data-testid="email-field" className="email-field">
          {' '}
          { email }
        </p>
        DESPESAS:
        {despesas.length > 0 ? (<p data-testid="total-field" />)
          : (<p data-testid="total-field">0</p>)}
        MOEDA:
        <p data-testid="header-currency-field">BRL</p>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

Header.propTypes = {
  email: Proptypes.string,
}.isRequired;

/* // usar o Thunk api
const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyprops: () => dispatch(fetchCurrency()),
}); */
export default connect(mapStateToProps)(Header);
