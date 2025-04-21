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
        <img src="https://skillicons.dev/icons?i=instagram" />
        </a>

        <a href={linkWpp} target="_blank">
        <img src="https://skills-icons.vercel.app/api/icons?i=whatsapp" />
        </a>
        <a href={linkSite} target="_blank">
        <img src="https://go-skill-icons.vercel.app/api/icons?i=chrome&theme=light" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;