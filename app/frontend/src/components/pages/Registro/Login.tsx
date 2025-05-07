import React from 'react';
import './Login.scss';

const Login: React.FC = ({ }) => {
  return (
    <div className="login-page">
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h2>Login</h2>
            <a className="cadastro-btn" href='/registro'>Registre-se</a>
          </div>
          <form className="form-grid">
            <div className="form-row">
              <input type="text" placeholder="Nome Completo" />
            </div>

            <div className="form-row">
              <input type="password" placeholder="Senha" />
            </div>

            <div className="form-footer">
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;