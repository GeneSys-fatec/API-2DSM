import './Cadastro.scss';
import React, { useState } from 'react';

const Cadastro: React.FC = () => {
  
  const [formData, setFormData]= useState({
    nomeUsuario: '',
    emailUsuario: '',
    senhaUsuario: '',
    dataNasc: '',
    telUsuario: '',
    idEmpresaPatrocinio: 0,
    idCidade: '',
  });

  //manipula o input do usuario para a recepcao de informacao
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    fetch('http://localhost:3005/auth/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(formData),
      
    })

    .then((response) => {
      if (!response.ok){
        throw new Error(`Erro: ${response.status}`);
      }
      return response.json();
    })

    .then((data) => {
      console.log('Usuário cadastrado com sucesso:', data);
      alert('Cadastro realizado com sucesso!');
    })

    .catch((error) => {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao realizar o cadastro. Por favor, tente novamente.');
    });

  }
  

  return (
    <div className="cadastro-page">
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h2>Cadastre-se</h2>
            <a className="login-btn" href="/login">Já tem login?</a>
          </div>

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text"
                name="nomeUsuario"
                placeholder="Nome Completo"
                value={formData.nomeUsuario}
                onChange={handleInputChange} />
            </div>
            <div className="form-row">
              <input type="email"
                name="emailUsuario"
                placeholder="Email"
                value={formData.emailUsuario}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
              <input type="password"
                name="senhaUsuario"
                placeholder="Senha"
                value={formData.senhaUsuario}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
              <input type="date"
                name="dataNasc"
                placeholder="Data de Nascimento"
                value={formData.dataNasc}
                onChange={handleInputChange}/>
            </div>

{/*--------- SERA IMPLEMENTADO --------- */}

            {/* <div className="form-row">
              <input type="text" placeholder="CPF" />
            </div> */}

            {/* <div className="form-row">
              <select>
                <option value="">Sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div> */}

            <div className="form-row">
              <input
                type="text"
                name="telUsuario"
                placeholder="Telefone"
                value={formData.telUsuario}
                onChange={handleInputChange}
              />
            </div>

            {/* <div className="form-row">
              <input
                type="number"
                name="idCidade"
                placeholder="ID da Cidade"
                value={formData.idCidade}
                onChange={handleInputChange}
              />
            </div> */}

{/*--------- VERIFICAR UTILIDADE DE TODOS OS CAMPOS --------- */}

            {/* <div className="form-row">
              <input type="text" placeholder="Rua" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Número" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Complemento" />
            </div>*/}

            <div className="form-row">
              <input type="text" placeholder="Estado" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Cidade" />
            </div>

{/*--------- SERA IMPLEMENTADO --------- */}

            {/* <div className="form-row">
              <input type="text" placeholder="Renda Familiar" />
            </div>

            <div className="form-row">
              <select>
                <option value="">Escolaridade</option>
                <option value="fundamental">Fundamental</option>
                <option value="medio">Médio</option>
                <option value="superior">Superior</option>
              </select>
            </div> */}

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
