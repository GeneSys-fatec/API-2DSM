import React from 'react';
import "./Navbar.scss"

interface NavProps {
  linkInstagram: string,
  linkWpp: string,
  linkSite: string
}

const Nav: React.FC<NavProps> = ({ linkInstagram, linkWpp, linkSite }) => {
  return (
    <nav className='navbar'>
      <a href="/">
        <img className="logo" src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2160,h_702/https://helpnei.com/wp-content/uploads/2024/07/Branca-8@3x.png'></img>
      </a>
      <div className="contatos">
        <a href={linkInstagram} target="_blank">
          <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" />
        </a>
        <a href={linkWpp} target="_blank">
          <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=FFFFFF" />
        </a>
        <a href={linkSite} target="_blank">
          <img src="https://img.icons8.com/?size=100&id=1349&format=png&color=FFFFFF" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;