import React from 'react';
import "./FooterCopy.scss";

const FooterPrincipal: React.FC = ({ }) => {
  return (
    <div className='cont'>
      <footer className='footer'>
        <p>&copy; Helpnei, 2025 <br/> Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default FooterPrincipal;