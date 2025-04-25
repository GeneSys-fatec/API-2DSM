import React from 'react';
import "./empresa-card.scss";
import { useEffect, useState } from 'react';

interface Empresa {
  id: number;
  sponsorLogo: string;
  nameSponsor: string;
}

const ListaEmpresas: React.FC = () => {
  const [ empresas, setEmpresas ] = useState<Empresa[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3005/empresa`)
    .then(res => res.json())
    .then(data => setEmpresas(data))
    .catch((err) => console.error("Empresa não encontrada", err));
  }, []);

  if (!empresas) return <p>Carregando empresa...</p>;

  return (
    <div className='container'>
      {empresas.map((empresa) => (
        <div className='card-empresas' key={empresa.id}>
          <img className='logo-empresa' src={empresa.sponsorLogo} alt={empresa.nameSponsor} />
          <p className='nome-empresa'>{empresa.nameSponsor}</p>
          <a href={`/dashboard`} className='botao-dashboard'>Ver Dashboard</a>
        </div>
      ))}
    </div>
  );
}

export default ListaEmpresas;