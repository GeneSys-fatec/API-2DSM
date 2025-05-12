import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3005/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const data = await response.json();

      localStorage.setItem('token', data.token);
      alert('Login realizado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      alert('Erro ao realizar o login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h2>Login</h2>
            <a className="cadastro-btn" href="/registro">Registre-se</a>
          </div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="username"
                value={formData.username}
                placeholder="Usuário"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Senha"
                onChange={handleInputChange}
                required
              />
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
