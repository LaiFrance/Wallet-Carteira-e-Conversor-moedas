import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Logo from '../asserts/Logo.png';
import './login.css';
import { validaEmail } from '../actions/validaEmail';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      isButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      { [name]: value },
      () => this.validaEmaileSenha(),
    );
  }

  validaEmaileSenha = () => {
    const { email, senha } = this.state;
    const password = 6;
    const passwordValidation = senha.length >= password;
    const emailValidation = email.includes('@') && email.includes('.com');
    const validaEmaileSenha = passwordValidation && emailValidation;

    this.setState({
      isButtonDisabled: !validaEmaileSenha,
    });
  }

  render() {
    const { email, senha, isButtonDisabled } = this.state;
    const { clickLogin } = this.props;
    return (
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <img src={ Logo } alt="Sistema Logo" />
          </div>

          <form>
            <h1>TrybeWallet</h1>
            <input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="Email"
              value={ email }
              onChange={ this.handleChange }
            />
            <input
              data-testid="password-input"
              type="password"
              placeholder="Senha"
              name="senha"
              value={ senha }
              onChange={ this.handleChange }
            />
            <Link to="/carteira">
              <button
                className="btn-login"
                disabled={ isButtonDisabled }
                type="submit"
                onClick={ () => clickLogin(email) }
                data-testid="login-submit-button"

              >
                Entrar
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  email: store.user.email,
});

// MAPDISPATCH
const mapDispatchToProps = (dispatch) => ({
  clickLogin: (email) => dispatch(validaEmail(email)),
});

// ADD LOGIN COMO Proptypes
Login.propTypes = {
  clickLogin: Proptypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
