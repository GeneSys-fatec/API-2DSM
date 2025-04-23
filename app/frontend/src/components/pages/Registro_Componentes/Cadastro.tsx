import React from 'react';
import './Cadastro.scss';

const Cadastro: React.FC = () => {
  return (
    <div className="cadastro-page">
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h2>Cadastre-se</h2>
            <button className="login-btn">Já tem login?</button>
          </div>

          <form className="form-grid">
            <div className="form-row">
              <input type="text" placeholder="Nome Completo" />
            </div>

            <div className="form-row">
              <input type="password" placeholder="Senha" />
            </div>

            <div className="form-row">
              <input type="number" placeholder="Idade" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="CPF" />
            </div>

            <div className="form-row">
              <select>
                <option value="">Sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="form-row">
              <input type="text" placeholder="Rua" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Número" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Complemento" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Estado" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Cidade" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Celular" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Renda Familiar" />
            </div>

            <div className="form-row">
              <select>
                <option value="">Escolaridade</option>
                <option value="fundamental">Fundamental</option>
                <option value="medio">Médio</option>
                <option value="superior">Superior</option>
              </select>
            </div>

            <div className="form-footer">
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
