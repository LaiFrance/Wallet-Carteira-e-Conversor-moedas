import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Header from './Header';
import { fetchCurrency } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    // requisição da API
    const { fetchCurrencyprops } = this.props;
    fetchCurrencyprops();
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

// usar o Thunk api
const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyprops: () => dispatch(fetchCurrency()),
});

Wallet.propTypes = {
  fetchCurrencyprops: Proptypes.Func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Wallet);
