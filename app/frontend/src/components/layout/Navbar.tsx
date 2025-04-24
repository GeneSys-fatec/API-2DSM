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
      <img src='https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_2160,h_702/https://helpnei.com/wp-content/uploads/2024/07/Branca-8@3x.png'></img>
      <div className="contatos">
        <a href={linkInstagram} target="_blank">
        <img  className="ig" src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" />
        </a>
        <a href={linkWpp} target="_blank">
        <img src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" />
        </a>
        <a href={linkSite} target="_blank">
        <img src="https://img.icons8.com/?size=100&id=VJz2Ob51dvZJ&format=png&color=000000" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;