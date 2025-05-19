import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import Alert from './Alert';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('http://localhost:3005/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Login bem-sucedido:', data);

        localStorage.setItem("userId", data.user.id);

        setTimeout(() => {
          setAlert({ type: 'success', message: 'Login realizado com sucesso!' });

          setTimeout(() => {
            setAlert(null);
            navigate('/empresas-disponiveis'); // Redireciona para a página de empresas disponíveis para patrocínio
          }, 4000);
        }, 1000);
      })
      .catch((error) => {
        console.error('Erro ao realizar login:', error);
        setTimeout(() => {
          setAlert({ type: 'error', message: 'Erro no login!' });

          setTimeout(() => {
            setAlert(null);
          }, 2000);
        }, 1000);
      });
  };

  return (
    <div className="login-page">
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-header">
            <h2>Login</h2>
            <a className="cadastro-btn" href="/registro">Registre-se</a>
          </div>

          {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}

          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-footer">
              <button type="submit" className="btn btn-primary">Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
