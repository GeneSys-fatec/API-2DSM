import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { useNavigate } from 'react-router-dom';

const Nav: React.FC = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setLogin(!!userId)
  });

  const handleLogout = () => {
    localStorage.removeItem('userId')
    setDropdownOpen(false)
    navigate('/registro')
  }

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev)
  };

  return (
    <nav className='navbar'>
      <img
        src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2160,h_702/https://helpnei.com/wp-content/uploads/2024/07/Branca-8@3x.png'
        alt="Logo da Empresa"
        className="logo"
      />
      {/* Ícone de Logout na Navbar */}
      {login && (
        <div className='logout'>
          <button onClick={toggleDropdown} className='icone-logout'>
            <img src="https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=FFFFFF" alt="Ícone do Usuário" />
          </button>
          {dropdownOpen && (
            <div className='dropdown-logout'>
              <button className='botao-logout' onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;