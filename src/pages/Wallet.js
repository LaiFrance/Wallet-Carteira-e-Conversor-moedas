import React from 'react';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
import Header from '../components/Header';
import { fetchCurrency } from '../actions';
import WalletForm from '../components/WalletForm';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends React.Component {
  async componentDidMount() {
    // requisição da API
    const { fetchCurrencyprops } = this.props;
    const data = await fetchCurrencyprops();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        <ExpensesTable />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCurrencyprops: proptypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

// usar o Thunk api
const mapDispatchToProps = (dispatch) => ({
  fetchCurrencyprops: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
