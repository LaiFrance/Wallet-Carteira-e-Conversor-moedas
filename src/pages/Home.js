import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header className="container">

      <Link to="/">
        <img className="logo" src={ logo } alt="Logo Projeto" />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>3 reservas</span>
        </div>
      </Link>

    </header>
  );
}
