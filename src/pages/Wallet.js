import React from 'react';
import './wallet.css';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Logo from '../asserts/Logo.png';

class Wallet extends React.Component {
  componentDidMount(){
    //requisição da API
  }
  render() {
    const { email } = this.props;
    return (
      <div className="container-wallet">
        <div className="wallet">
          <div className="wallet-area">
            <img src={ Logo } alt="Sistema Logo" />
          </div>

          <form>
            <h1>TrybeWallet</h1>
            <p data-testid="email-field" className="email-field">
              { email }
              {' '}
            </p>
            DESPESAS:
            <p className="despesas" data-testid="total-field">0 </p>
            MOEDA:
            <select
              data-testid="header-currency-field"

            >

              <option value="BRL">BRL</option>
              <option value=" USD"> USD</option>
              <option value="EUR">EUR</option>
            </select>
          </form>
        </div>
      </div>

    );
  }
}

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({ email: state.user.email });
export default connect(mapStateToProps)(Wallet);
