import React from 'react';
import "./empresa-card.scss"

const EmpresaCard: React.FC = ({ }) => {
  return (
    <div className='container'>
        <div className='card-empresas'>
          <img className='logo-empresa' src="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" alt="" />
          <p className='nome-empresa'>Agência Ship</p>
          <a href="" className='botao-dashboard'>Ver Dashboard</a>
        </div>
        <div className='card-empresas'>
          <img className='logo-empresa' src="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" alt="" />
          <p className='nome-empresa'>Agência Ship</p>
          <a href="" className='botao-dashboard'>Ver Dashboard</a>
        </div>
        <div className='card-empresas'>
          <img className='logo-empresa' src="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" alt="" />
          <p className='nome-empresa'>Agência Ship</p>
          <a href="" className='botao-dashboard'>Ver Dashboard</a>
        </div>
        <div className='card-empresas'>
          <img className='logo-empresa' src="https://agenciaship.com.br/wp-content/uploads/2023/05/Design-sem-nome-6-1-300x300.png" alt="" />
          <p className='nome-empresa'>Agência Ship</p>
          <a href="" className='botao-dashboard'>Ver Dashboard</a>
        </div>
    </div>
  );
};

export default EmpresaCard;