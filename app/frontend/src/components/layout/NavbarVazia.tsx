import React from 'react';
import "./Navbar.scss";

const Nav: React.FC = () => {
  return (
    <nav className='navbar'>
      <img
        src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2160,h_702/https://helpnei.com/wp-content/uploads/2024/07/Branca-8@3x.png'
        alt="Logo da Empresa"
        className="logo"
      />
    </nav>
  );
};

export default Nav;