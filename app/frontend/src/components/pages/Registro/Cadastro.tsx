import './Cadastro.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

const Cadastro: React.FC = () => {

  const [formData, setFormData] = useState({
    nomeUsuario: '',
    emailUsuario: '',
    senhaUsuario: '',
    cpfUsuario: '',
    sexoUsuario: '',
    dataNasc: '',
    telUsuario: '',
    estadoUsuario: '',
    cidadeUsuario: '',
    ruaUsuario: '',
    numeroUsuario: '',
    rendaUsuario: '',
    escolaridadeUsuario: '',
    idEmpresaPatrocinio: 0,
    idCidade: '',
  });

  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])
  const [sugestoes, setSugestoes] = useState<string[]>([]);
  const [buscaCidade, setBuscaCidade] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3005/estados')
      .then(response => {
        setEstados(response.data)
      })
      .catch(error => {
        console.error('Erro ao buscar estados:', error)
      })
  }, [])

  const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const estadoId = e.target.value;

    setFormData({
      ...formData,
      estadoUsuario: estadoId,
    });

    axios.get(`http://localhost:3005/cidades/${estadoId}`)
      .then(response => {
        setCidades(response.data);
        setSugestoes([]);
        setBuscaCidade('');
      })
      .catch(error => {
        console.error('Erro ao buscar cidades:', error);
      });
  };

  const handleCidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setBuscaCidade(valor);

    if (valor.length > 0) {
      const filtradas = cidades
        .filter((cidade: any) =>
          cidade?.nomeCidade && cidade.nomeCidade.toLowerCase().includes(valor.toLowerCase())
        )
        .map((cidade: any) => cidade.nomeCidade);

      setSugestoes(filtradas);
    } else {
      setSugestoes([]);
    }
  };

  //manipula o input do usuario para a recepcao de informacao
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('http://localhost:3005/auth/register', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
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
        console.log('Usuário cadastrado com sucesso:', data);
        alert('Cadastro realizado com sucesso!');
        navigate('/empresas-disponiveis');
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
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
              <input type="text"
                name="cpfUsuario"
                placeholder="CPF"
                value={formData.cpfUsuario}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
              <select
                name='sexoUsuario'
                value={formData.sexoUsuario}
                onChange={handleInputChange}>
                
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

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

            <div className="form-row">
              <select name="estadoUsuario" value={formData.estadoUsuario} onChange={handleEstadoChange}>
                <option value="">Selecione o Estado</option>
                {estados.map((estado: any) => (
                  <option key={estado.id} value={estado.id}>
                    {estado.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row autocomplete-container">
              <input
                type="text"
                name="cidadeUsuario"
                placeholder="Digite a Cidade"
                value={buscaCidade}
                onChange={handleCidadeChange}
                onBlur={() => setTimeout(() => setSugestoes([]), 200)}
                className="autocomplete-input"
              />
              {sugestoes.length > 0 && (
                <ul className="autocomplete-suggestions">
                  {sugestoes.map((cidade, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setBuscaCidade(cidade);
                        setFormData({ ...formData, cidadeUsuario: cidade });
                        setSugestoes([]);
                      }}
                      className="autocomplete-item"
                    >
                      {cidade}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="form-row">
              <input type="text"
                name='ruaUsuario'
                placeholder="Rua"
                value={formData.ruaUsuario}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
              <input type="text"
                name='numeroUsuario'
                placeholder="Número"
                value={formData.numeroUsuario}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
              <input type="text"
                name='rendaUsuario'
                placeholder="Renda Familiar"
                value={formData.rendaUsuario}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
              <select
                name='escolaridadeUsuario'
                value={formData.escolaridadeUsuario}
                onChange={handleInputChange}>
                <option value="">Escolaridade</option>
                <option value="Fundamental">Fundamental</option>
                <option value="Médio">Médio</option>
                <option value="Superior">Superior</option>
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
