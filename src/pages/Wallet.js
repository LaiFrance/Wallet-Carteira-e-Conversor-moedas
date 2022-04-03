import React from 'react';
import Logo from '../asserts/Logo.png';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="container-wallet">
        <div className="wallet">
          <div className="wallet-area">
            <img src={ Logo } alt="Sistema Logo" />
          </div>

          <form>
            <h1>TrybeWallet</h1>
            <input
              data-testid="email-field"
              type="email"
              name="email"

            />
            <input
              data-testid="total-field"
              type="number"
              name="Despesas"
              value={ 0 }

            />
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

export default Wallet;
