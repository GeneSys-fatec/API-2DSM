import React from 'react';
import "./Navbar.scss";

const NavbarRotas: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica se há um token salvo

  return (
    <nav className='navbar-rotas'>
      <a className='nav-item' href="/">Empresas Disponíveis</a>
      <a className='nav-item' href={localStorage.getItem("userId") ? "/empresas-disponiveis" : "/registro"}>Seja Patrocinado</a>
    </nav>
  );
};

export default NavbarRotas;
