import React from 'react';
import "./NavbarPrincipal.scss";

const NavbarPrincipal: React.FC = ({ }) => {
  return (
    <div className='conte'>
      <nav className='navbarprincipal'>
        <a className='nav-item' href="/">Empresas Disponíveis</a>
        <a className='nav-item' href="/registro">Seja Patrocinado</a>
      </nav>
    </div>
  );
};

export default NavbarPrincipal;